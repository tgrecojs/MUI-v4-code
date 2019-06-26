import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import styles from './styles'

const useStyles = makeStyles(styles)

const Demo = () => {
	const classes = useStyles()
	return (
		<div className={`${classes.root}`}>
			<Button className={`${classes.btn}`} variant="text">
				Hooray for Hooks!
			</Button>
		</div>
	)
}

export default Demo
