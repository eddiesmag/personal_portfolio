import React, { useContext, useState } from 'react';
import { Fab } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { LightModeOutlined, DarkModeOutlined } from '@mui/icons-material';
import StyleContext from '../../contexts/StyleContext';

import './styles/ToggleSwitch.scss';

const useStyles = makeStyles({
  themMode: {
    color: 'rgb(64, 123, 254)',
    backgroundColor: 'inherit',
    '&:hover, .Mui-focusVisible': {
      color: 'rgb(168, 202, 255)',
      backgroundColor: 'inherit'
    }
  }
});

const ToggleSwitch = () => {
  const { isDark, changeTheme } = useContext(StyleContext);
  const [themeMode, setThemeMode] = useState(isDark);

  const classes = useStyles();
  return (
    <Fab
      size="small"
      aria-label="theme-mode"
      className={classes.themMode}
      onClick={() => {
        changeTheme();
        setThemeMode(!themeMode);
      }}>
      {themeMode ? <LightModeOutlined /> : <DarkModeOutlined />}
    </Fab>
  );
};

export default ToggleSwitch;
