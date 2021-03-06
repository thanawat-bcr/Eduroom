import React, { Fragment } from 'react'
import Icon from './Icon'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { useRouter } from 'next/router'
import api from '../../api'
import { useState, useEffect } from 'react'
import moment from 'moment'

const ForumInRoom = ({ row }) => {
	const router = useRouter()
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flexStart',
			// textAlign: 'center',
			margin: '15px',
			marginTop: '10px',
			color: theme.palette.text.secondary,
		},
	}))
	const classes = useStyles()
	return (
		<Fragment>
			<div className={classes.root}>
				<Grid container spacing={3} variant="outlined">
					<Grid item xs={12}>
						<div>
							{row?.map((el) => {
								return (
									<Paper className={classes.paper} style={{ paddingLeft: '35px', cursor: 'pointer' }}>
										<div
											onClick={() => {
												router.push(`/forum/${el.forumid}`)
											}}
										>
											<div style={{ fontWeight: '500', fontSize: '1.5em', color: '#5b5b5b' }}>{el.titlethread}</div>
											<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
												<div
													style={{
														marginTop: '15px',
														marginRight: '8px',
														padding: '3px',
														fontSize: '11px',
														color: '#5b5b5b',
														borderRadius: '10px',
														border: '1px solid #a880f7',
													}}
												>
													{el.typename}{' '}
												</div>
												<div
													style={{
														marginTop: '15px',
														marginRight: '8px',
														padding: '3px',
														fontSize: '11px',
														color: '#5b5b5b',
														borderRadius: '10px',
														border: '1px solid #a880f7',
													}}
												>
													{el.subtypename}{' '}
												</div>
											</div>
											<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
												<div style={{ marginTop: '25px', fontSize: '13px', color: '#5b5b5b' }}>
													{el.author} post {moment(el.posttime).fromNow()}
												</div>
											</div>
										</div>
										<div className="icon" style={{ bottom: 0, right: 0, marginTop: '20px' }}>
											<div style={{ paddingRight: '30px' }}>
												<Icon type="like" />
											</div>
											<div
												onClick={() => {
													router.push(`/forum/${el.forumid}`)
												}}
												style={{ paddingRight: '30px' }}
											>
												<Icon type="comment" />
											</div>
										</div>
									</Paper>
								)
							})}
						</div>
					</Grid>
				</Grid>
			</div>
			<style jsx>
				{`
					.button {
						cursor: pointer;
						opacity: 0.8;
						transition: 0.25s;
						display: flex;
						justify-content: end;
						flex-direction: row;
						align-items: flex-end;
					}
					.icon {
						display: flex;
						justify-content: end;
						flex-direction: row;
						align-items: flex-end;
						cursor: pointer;
					}
				`}
			</style>
		</Fragment>
	)
}
export default ForumInRoom
