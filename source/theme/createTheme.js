// src/ui/theme/index.js

import { createMuiTheme } from '@material-ui/core/styles'

const palette = {
	primary: { main: '#3f51b5' },
	secondary: { main: '#f50057' }
}
const themeName = 'The TB Doggy Special'

export default createMuiTheme({
	palette,
	themeName,
	typography: {
		fontFamily: 'Bitter'
	}
})
