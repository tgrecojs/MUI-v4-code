import React, { useState } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Switch, FormControlLabel } from '@material-ui/core'
import Home from './Card'
import Layout from './Layout'
import Card from './Card'

const themeObject = {
	palette: {
		primary: { main: '#053f5b' },
		secondary: { main: '#5e3c6f' },
		type: 'light'
	},
	themeName: 'Blue Lagoon 2020',
	typography: {
		fontFamily: 'Bitter'
	}
}

const useDarkMode = () => {
	const [theme, setTheme] = useState(themeObject)

	const {
		palette: { type }
	} = theme
	const toggleDarkMode = () => {
		const updatedTheme = {
			...theme,
			palette: {
				...theme.palette,
				type: type === 'light' ? 'dark' : 'light'
			}
		}
		setTheme(updatedTheme)
	}
	return [theme, toggleDarkMode]
}

const App = () => {
	const [theme, toggleDarkMode] = useDarkMode()

	const themeConfig = createMuiTheme(theme)
	console.log(themeConfig)
	return (
		<MuiThemeProvider theme={themeConfig}>
			<Layout>
				<FormControlLabel control={<Switch onClick={toggleDarkMode} label={`Toggle Dark Mode`} />} />
				<Card />
			</Layout>
		</MuiThemeProvider>
	)
}

export default App
