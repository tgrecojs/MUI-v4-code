# Theme set up

## Step 1. Material Design color tool & generate theme
* Prior to configuring our theme we can use this color tool to specify the colors for our theme.

## Step. 2
  we configure our app to use Material UIs theming feature

## 3. Add theme - `theme.js` 
* explain that the theme object is optional. 
* leaving it out will just using material UIs default config object.

```js


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

```




# 4. **SHOW DEFAULT THEME**

### 5. Paste in content from react-theming
* replace default theme with new theme. 
* **Only need these two values for that robust config object to**
* Now if we check out our app we'll see that the UI has been updated... and we're seeing  e leverage all these features


```js
import React from 'react';
import {Button, Typography, Container} from '@material-ui/core';
import { useTheme, makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(2),
    textAlign: 'center',
    display: 'flex',
    height: 100,
    WebkitJustifyContent: 'space-around'
  }
}));

const ThemeDemo = () => {
  const {palette} = useTheme();
  log(palette);
  return (
    <Container>
      <Typography></Typography>
    </Container>);
};

export default ThemeDemo;
```

## 6.