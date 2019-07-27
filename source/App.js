import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import PaperHook from './ButtonExample/component';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

export default function App() {
  return (
    <ThemeProvider theme={themeConfig}>
      <Box color="primary">
				im a a box!
      </Box>
    </ThemeProvider>
  );
}
