import React, { useContext, useState } from 'react';
import { Tab } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import StyleContext from '../../contexts/StyleContext';

import './styles/ToggleSwitch.scss';

const ToggleSwitch = () => {
  const { isDark, changeTheme } = useContext(StyleContext);
  const [themeMode, setThemeMode] = useState(isDark);
  return (
    <Tab
      icon={themeMode ? <LightMode /> : <DarkMode />}
      aria-label="icon"
      color="inherit"
      onClick={() => {
        changeTheme();
        setThemeMode(!themeMode);
      }}
    />
  );
};

export default ToggleSwitch;
