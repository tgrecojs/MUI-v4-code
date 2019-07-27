import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './createTheme';
import Demo from './Demo';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Demo />
  </ThemeProvider>,
  document.querySelector('#root'),
);
