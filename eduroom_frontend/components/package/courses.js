import { Fragment, useEffect, useState } from 'react'
import CourseCheck from './courseCheck'
import Paginations from './paginations'
import api from '../../api'

const Courses = (props) => {
	const [startPage, setStartPage] = useState(1)
	const [pagination, setPagination] = useState(1)
	const [courses, setCourses] = useState([])
	const [numCourses, setNumCourses] = useState(0)
	const fetchNumCourses = async () => {
		try {
			const res = await api.get('/api/package/numCourses')
			setNumCourses(res.data.count)
		} catch (err) {}
	}
	const fetchCourses = async () => {
		try {
			const res = await api.get('/api/package/courses', { params: { page: pagination, mxData: 3 } })
			setCourses(res.data)
		} catch (err) {}
	}

	useEffect(() => {
		fetchCourses()
	}, [pagination])

	useEffect(() => {
		fetchCourses()
		fetchNumCourses()
	}, [])

	const handleClick = (id) => {
		const idx = props.selectedCourses.indexOf(id)
		if (idx === -1) {
			props.selectedCourses.push(id)
		} else {
			props.selectedCourses.splice(idx, 1)
		}
		props.handleSelectedCourses(props.selectedCourses)
	}
	const renderCourses = () => {
		return (
			<Fragment>
				{courses.map((course, idx) => {
					const isSelected = props.selectedCourses.includes(course.courseid)
					return (
						<div className="course" key={idx}>
							<CourseCheck course={course} key={idx} handleClick={handleClick} isSelected={isSelected} />
						</div>
					)
				})}
				<style jsx>{`
					.course {
						width: 33%;
						padding: 20px;
					}
				`}</style>
			</Fragment>
		)
	}
	return (
		<div>
			<div className="container">
				{renderCourses()}
				<Paginations
					startPage={startPage}
					setStartPage={(newStartPage) => setStartPage(newStartPage)}
					numData={numCourses}
					page={pagination}
					setPage={(newPage) => setPagination(newPage)}
					mxDataPerPage={3}
					numPagination={3}
				></Paginations>
			</div>
			<style jsx>{`
				.container {
					display: flex;
					flex-wrap: wrap;
				}
			`}</style>
		</div>
	)
}
export default Courses
