import React from 'react';
import {Button, Box, Typography, Container} from '@material-ui/core';
import { useTheme, makeStyles, createStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => createStyles({
  root: {
    backgroundColor: theme.palette.secondary.light,
    padding: theme.spacing(2),
    display: 'flex',
    height: 100,
    WebkitJustifyContent: 'space-around'
  },
  buttonStyles: {
    backgroundColor: theme.palette.primary.dark,
    '&:hover': {
      backgroundColor: theme.palette.primary.light
    }
  }
}));

const ThemeDemo = () => {
  const { root, buttonStyles } = useStyles();
  return (
    <Box className={`${root}`}>
      <Button variant="contained" className={`${buttonStyles}`}>
        Existing Users
      </Button>
      <Button variant="contained" className={`${buttonStyles}`}>
        New User Signup
      </Button>
    </Box>);
};

export default ThemeDemo;
