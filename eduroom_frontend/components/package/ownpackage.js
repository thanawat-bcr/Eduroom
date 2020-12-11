import React, { Fragment, useState } from 'react'
import style from '../../styles/package/ownpackage'
import Dialog from '@material-ui/core/Dialog'
import { useRouter } from 'next/router'
import api from '../../api'

const Ownpackage = ({ ownPackage, fetchPackages }) => {
	const [open, setOpen] = useState(false)
	const router = useRouter()
	const [type] = useState('created')
	console.log(ownPackage)
	const handleOpenDialog = (e) => {
		e.preventDefault()
		e.stopPropagation()
		setOpen(true)
		handleSubmit()
	}
	const handleCloseDialog = (e) => {
		e.preventDefault()
		e.stopPropagation()
		setOpen(false)
	}
	const handleSubmit = () => {
		console.log(type)
	}

	const handleDelete = async (e) => {
		e.stopPropagation()
		// router.push('/user/instructor/course')
	}

	const handlePublish = async (e) => {
		e.stopPropagation()
		await api.post('/api/package/publishPackage', { packageid: ownPackage.packageid })
		fetchPackages()
	}

	const renderEdit = () => {
		if (ownPackage.ispublic) return null
		return (
			<Fragment>
				<button
					onClick={(e) => {
						router.push(`/user/instructor/course/package/${ownPackage.packageid}/editpackage`)
						e.stopPropagation()
					}}
					className="active pebutton"
				>
					<i className="fas fa-pen"></i>edit
				</button>
				<style jsx>{style}</style>
			</Fragment>
		)
	}
	const getPublishClass = () => {
		return ownPackage.ispublic ? 'disabled pebutton' : 'active pebutton'
	}
	const renderPublish = () => {
		return (
			<Fragment>
				<button onClick={handlePublish} className={getPublishClass()} disabled={ownPackage.ispublic}>
					<i className="fas fa-globe"></i>publish
				</button>
				<style jsx>{style}</style>
			</Fragment>
		)
	}

	const renderOwnPackage = () => {
		if (!ownPackage) return null
		return (
			<Fragment>
				<div
					className="center pdt-20"
					onClick={() => {
						router.push(`/course/${ownPackage.packageid}/packagePage`)
					}}
				>
					<div className="package">
						<div style={{ display: 'flex' }}>
							<div>
								<img src={ownPackage.image} className="picture"></img>
							</div>
							<div className="block2">
								<div style={{ display: 'flex' }}>
									<div className="name">{ownPackage.packagename}</div>
									<div style={{ paddingLeft: '10%' }}>
										<button className="Xbutton" onClick={handleOpenDialog}>
											X
										</button>
									</div>
								</div>
								<div className="pri-cat">
									฿<span>{ownPackage.price}</span>
								</div>
								<div>
									<div className="pri-cat">Category: {ownPackage.cataname}</div>
									<div className="right">
										{renderPublish()}
										{renderEdit()}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Dialog open={open}>
					<div className="dialog">
						<div className="indialog">
							<div className="dialog-content">Do you want to remove this package?</div>
							<div>
								<img src="/images/package/remove.svg" style={{ width: 200, height: 180 }} />
							</div>
							<div>
								<button className="ycbutton" onClick={handleDelete}>
									Yes
								</button>
								<button className="ycbutton" style={{ backgroundColor: '#5b5b5b' }} onClick={handleCloseDialog}>
									Cancel
								</button>
							</div>
						</div>
					</div>
				</Dialog>
				<style jsx>{style}</style>
			</Fragment>
		)
	}
	return (
		<Fragment>
			<div>{renderOwnPackage()}</div>
		</Fragment>
	)
}
export default Ownpackage
