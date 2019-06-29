import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import styles from './styles.shared'

const useStyles = makeStyles(styles)

const Demo = () => {
	const { root, btn } = useStyles()
	return (
		<div className={`${root}`}>
			<Button className={`${btn}`} variant="contained" fullWidth>
				Hooray for hooks!
			</Button>
		</div>
	)
}

export default Demo
