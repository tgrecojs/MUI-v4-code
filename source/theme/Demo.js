import React from 'react'
import { Box, Button } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'

const useStyles = makeStyles(({ palette, spacing }) => ({
	root: {
		backgroundColor: palette.primary.light,
		padding: spacing(2),
		display: 'flex',
		height: '100vh',
		justifyContent: 'space-around'
	},
	buttonStyles: {
		width: '30%',
		maxHeight: 120,
		backgroundColor: palette.secondary.dark,
		'&:hover': {
			backgroundColor: palette.secondary.light
		}
	}
}))

const ThemeDemo = () => {
	const { buttonStyles, root } = useStyles()
	return (
		<Box className={`${root}`}>
			<Button variant="contained" className={`${buttonStyles}`}>
				Existing User Sign In
			</Button>
			<Button variant="contained" className={`${buttonStyles}`}>
				User Sign Up
			</Button>
		</Box>
	)
}

export default ThemeDemo
