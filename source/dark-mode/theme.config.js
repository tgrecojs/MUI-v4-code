// src/ui/theme/index.js

import { createMuiTheme } from '@material-ui/core/styles'

const palette = {
	primary: { main: '#3f51b5' },
	secondary: { main: '#f50057' },
	type: 'light'
}

const themeName = 'The TB Doggy Special'

const lightTheme = {
	palette,
	themeName,
	typography: {
		fontFamily: 'Bitter'
	}
}
const darkTheme = {
	palette: {
		primary: { main: '#053f5b' },
		secondary: { main: '#5e3c6f' },
		type: 'light'
	},
	themeName,
	typography: {
		fontFamily: 'Bitter'
	}
}
const themes = {
	light: createMuiTheme(lightTheme),
	dark: createMuiTheme(darkTheme)
}

export default darkTheme
