const bcrypt = require('bcryptjs')
const errorHandler = require('../../middleware/error')
const pool = require('../../database/db')
const ErrorResponse = require('../../utils/errorResponse')
const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')
const handlebars = require('handlebars')
const dayjs = require('dayjs')
const { certificateTemplate, certificateStyle } = require('../../utils/certTemplate')

const test = async (req, res) => {
	const time = await pool.query('SELECT NOW()')

	res.send({ time })
}
// const user = req.user.id
// const user="08e9d239-b3f2-4db8-b29a-da99a314df92";
const getWishlist = async (req, res) => {
	try {
		const user = req.user.id
		const condition = req.query.condition
		// const condition='';
		const orderby = req.query.orderby
		// const orderby='addtime desc';
		const data = await pool.query(
			'select w.userid,w.courseid,addtime,coursename,coursepicture,price,p.firstname,p.lastname ' +
				'from user_wishlist w ' +
				'inner join course c on c.courseid=w.courseid ' +
				'inner join instructor i on i.instructorid=c.ownerid ' +
				'inner join user_profile p on i.userid=p.userid ' +
				'where w.userid=$1 ' +
				condition +
				'order by ' +
				orderby +
				'; ',
			[user]
		)
		const ann = data.rows
		res.send(ann)
	} catch (error) {
		const err = {
			statusCode: 500,
			message: error,
		}
		return errorHandler(err, req, res)
	}
}

const getMycourse = async (req, res) => {
	try {
		const user = req.user.id
		const finish = req.query.finish
		const condition = req.query.condition
		const orderby = req.query.orderby

		// const user = '08e9d239-b3f2-4db8-b29a-da99a314df92'
		// const condition = ''
		// const orderby = 'addtime desc'

		const data = await pool.query(
			'select m.userid,m.courseid,addtime,lastvisit,isfinished,coursename,coursepicture,p.firstname,p.lastname ' +
				'from user_mycourse m ' +
				'inner join course c on c.courseid=m.courseid ' +
				'inner join instructor i on i.instructorid=c.ownerid ' +
				'inner join user_profile p on i.userid=p.userid ' +
				'where m.userid=$1 and isfinished=$2 ' +
				condition +
				'order by ' +
				orderby +
				'; ',
			[user, finish]
		)
		const ann = data.rows
		res.send(ann)
	} catch (error) {
		const err = {
			statusCode: 500,
			message: error,
		}
		return errorHandler(err, req, res)
	}
}

const deleteWishlist = async (req, res) => {
	try {
		const course = req.body.courseid
		const user = req.user.id
		await pool.query('delete from user_wishlist where (userid,courseid)=($1,$2);', [user, course])
		res.send({ success: true })
	} catch (error) {
		const err = {
			statusCode: 500,
			message: error,
		}
		return errorHandler(err, req, res)
	}
}

const getProfile = async (req, res) => {
	try {
		const user = req.user.id
		const userProfile = await pool.query(
			'select avatar,firstname,lastname,email,birthdate,createat,bio,phoneno ' +
				'from user_profile u ' +
				'inner join local_auth l on u.userid = l.userid ' +
				'where u.userid=$1; ',
			[user]
		)
		res.send(userProfile.rows[0])
	} catch (error) {
		const err = {
			statusCode: 500,
			message: error,
		}
		return errorHandler(err, req, res)
	}
}

const editProfile = async (req, res) => {
	try {
		const user = req.user.id
		const avatar = req.body.avatar
		const firstname = req.body.firstname
		const lastname = req.body.lastname
		const birthdate = req.body.birthdate
		const bio = req.body.bio
		// const phoneno = req.body.phoneno , phoneno='${phoneno}'
		const updateUserQuery = `update user_profile set avatar='${avatar}', updateat=CURRENT_TIMESTAMP,
		firstname='${firstname}', lastname='${lastname}', birthdate='${birthdate}', bio='${bio}'
		where userid = '${user}'`
		console.log(updateUserQuery)
		await pool.query(updateUserQuery)
		res.send({ success: true })
	} catch (error) {
		const err = {
			statusCode: 500,
			message: error,
		}
		return errorHandler(err, req, res)
	}
}

const checkPassword = async (req, res) => {
	try {
		const { password } = req.body
		const user = req.user.id
		const data = await pool.query('select password from local_auth where userid = $1', [user])
		const dbPassword = data.rows[0].password
		const match = await bcrypt.compare(password, dbPassword)
		res.send({ match })
	} catch (error) {
		const err = {
			statusCode: 500,
			message: error,
		}
		return errorHandler(err, req, res)
	}
}

const newPassword = async (req, res) => {
	try {
		const { password } = req.body
		const user = req.user.id
		const hashedPassword = await bcrypt.hash(password, 10)
		await pool.query('update local_auth set password=$2 where userid=$1; ', [user, hashedPassword])
		res.send({ success: true })
	} catch (error) {
		const err = {
			statusCode: 500,
			message: error,
		}
		return errorHandler(err, req, res)
	}
}

const getCertificate = async (req, res, next) => {
	const user = req.user
	const data = await pool.query(
		'SELECT firstname as firstName,lastname as lastName,user_mycourse.courseid as courseid, coursename as courseName,finishtime as finishDate FROM user_mycourse JOIN user_profile ON user_mycourse.userid = user_profile.userid JOIN course c on user_mycourse.courseid = c.courseid WHERE isfinished = true AND user_mycourse.userid = $1',
		[user.id]
	)
	res.status(200).json({ success: true, data: data.rows })
	return
}


const downloadCertificate = async (req, res, next) => {
	const user = req.user
	const courseid = req.body.courseid
	const data = await pool.query(
		'SELECT firstname, lastname, coursename,finishtime as finishdate FROM user_mycourse JOIN user_profile ON user_mycourse.userid = user_profile.userid JOIN course on course.courseid = user_mycourse.courseid WHERE isfinished = true AND user_mycourse.userid = $1 AND user_mycourse.courseid = $2',
		[user.id, courseid]
	)
	if (data.rowCount == 1) {
		const cerData = data.rows[0]
		const templateHTML = certificateTemplate()
		const template = handlebars.compile(templateHTML)
		const finishedDate = dayjs(cerData.finishdate).format('D MMMM YYYY')
		const html = template({ ...cerData, finishdate: finishedDate })
		const browser = await puppeteer.launch({
			executablePath: process.env.PUPPETEER_EXEC_PATH, 
			args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
			headless: true,
		})
		const page = await browser.newPage()
		await page.goto(`data:text/html;charset=UTF-8,${html}`, { waitUntil: 'networkidle0' })
		await page.addStyleTag({ content: certificateStyle })
		// const component = await page.$eval('.certificate', (element) => {
		// 	return element.innerHTML
		// })
		// await page.setContent(component)
		await page.waitFor(2000)
		const pdf = await page.pdf({ 
			format: 'A4',
			// landscape: true
		})
		// const ss = await page.screenshot({
		// 	type: 'jpeg',
		// 	quality: 100
		// })
		await browser.close()
		res.set({ 'Content-Type': 'image/jpg' })
		res.send(pdf)
	} else {
		return next(new ErrorResponse('Certificate not found', 404))
	}
}

module.exports = {
	test,
	getWishlist,
	getMycourse,
	deleteWishlist,
	getProfile,
	editProfile,
	checkPassword,
	newPassword,
	getCertificate,
	downloadCertificate,
}
