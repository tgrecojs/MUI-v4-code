import React, { useState } from 'react'
import { Switch, AppBar, FormControlLabel } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
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

const useTheme = () => {
	const [theme, setTheme] = useState(themeObject)

	const {
		palette: { type }
	} = theme

	const toggleDarkTheme = () => {
		const updatedTheme = {
			...theme,
			palette: {
				...theme.palette,
				type: type === 'light' ? 'dark' : 'light'
			}
		}

		setTheme(updatedTheme)
	}
	return [theme, toggleDarkTheme]
}
const Header = ({ onToggleDark }) => (
	<AppBar color="primary" position="static">
		<Switch onClick={onToggleDark} />{' '}
	</AppBar>
)

const App = () => {
	const [theme, toggleDarkTheme] = useTheme()

	const themeConfig = createMuiTheme(theme)
	return (
		<MuiThemeProvider theme={themeConfig}>
			<Layout>
				<Card />
				<FormControlLabel control={<Switch onClick={toggleDarkTheme} />} label="Toggle Dark Mode" />
			</Layout>
		</MuiThemeProvider>
	)
}

export default App
