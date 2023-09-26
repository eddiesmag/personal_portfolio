import { Tab, Tabs } from '@mui/material';
import React, { useState, useContext } from 'react';
import { introduction } from '../../portfolio';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import StyleContext from '../../contexts/StyleContext';
import './styles/Header.scss';
const Header = () => {
  const { isDark } = useContext(StyleContext);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      className={isDark ? 'dark-menu' : 'menu'}
      value={value}
      onChange={handleChange}
      centered
      textColor="inherit"
      indicatorColor={isDark ? null : 'primary'}
      ind
      variant="fullWidth"
    >
      <Tab
        href="/"
        label={
          <span href="/" className="title">
            <span className="grey-color">&lt;</span>
            <span> </span>
            <span>{introduction.username}</span>
            <span className="grey-color">{' /'}</span>
            <span className="grey-color">&gt;</span>
          </span>
        }
      />
      <Tab label="Skills" href="#skills" />
      <Tab label="Work Experiemces" href="#experience" />
      <Tab label="Open Source" href="#openSource" />
      <Tab label="Achievements" href="#achievements" />
      <Tab label="Blogs" href="#blogs" />
      <Tab label="Talks" href="#talks" />
      <Tab label="Contact Me" href="#contact" />
      <ToggleSwitch />
    </Tabs>
  );
};

export default Header;
