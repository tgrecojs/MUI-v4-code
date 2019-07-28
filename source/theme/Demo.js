import React from 'react'
import { Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(({ palette: { primary, secondary, common }, spacing }) => ({
	root: {
		backgroundColor: primary.light,
		padding: spacing(2),
		display: 'flex',
		height: '100vh',
		justifyContent: 'space-around'
	},
	buttonStyles: {
		backgroundColor: secondary.dark,
		color: common.white,
		maxHeight: 120,
		width: '30%',
		'&:hover': {
			backgroundColor: secondary.light
		}
	}
}))

const ThemeDemo = () => {
	const { root, buttonStyles } = useStyles()
	return (
		<Box className={`${root}`}>
			<Button className={`${buttonStyles}`}>Login</Button>
			<Button className={`${buttonStyles}`}>Sign Up</Button>
		</Box>
	)
}

export default ThemeDemo
