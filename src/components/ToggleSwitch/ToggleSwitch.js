import { LightModeOutlined, DarkModeOutlined } from '@mui/icons-material';
import { Fab } from '@mui/material';
import React, { useContext, useState } from 'react';

import StyleContext from '../../contexts/StyleContext';

import './styles/ToggleSwitch.scss';

const ToggleSwitch = () => {
  const { isDark, changeTheme } = useContext(StyleContext);
  const [themeMode, setThemeMode] = useState(isDark);

  return (
    <Fab
      sx={{
        boxShadow: 3,
        color: 'primary.main',
        bgcolor: 'inherit',
        '&:hover': {
          color: 'primary.light',
          bgcolor: isDark ? 'secondary.light' : 'common.white',
          boxShadow: 5
        }
      }}
      size="small"
      aria-label="theme-mode"
      onClick={() => {
        changeTheme();
        setThemeMode(!themeMode);
      }}>
      {themeMode ? <LightModeOutlined /> : <DarkModeOutlined />}
    </Fab>
  );
};

export default ToggleSwitch;
