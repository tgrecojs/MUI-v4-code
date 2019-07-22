
// src/ui/theme/index.js
import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#85bcff' },
  secondary: { main: '#ff4b46' }
};

const themeName = 'Omnicorp User Onboarding Theme';

export default createMuiTheme({palette,
  themeName,
  typography: {
    fontFamily: '\'Bitter\', serif'
  }});
