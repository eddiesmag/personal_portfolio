import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import Headroom from 'react-headroom';
import { LightMode, DarkMode } from '@mui/icons-material';

import './styles/Header.scss';
import { introduction } from '../../portfolio';
const Header = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Headroom>
      <Tabs value={value} onChange={handleChange} centered variant="fullWidth">
        <Tab
          href="/"
          label={
            <span href="/" className="title">
              <span className="grey-color">&lt;</span>
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
        <Tab
          icon={<LightMode />}
          aria-label=""
          disableRipple={true}
          focusRipple={false}
        />
        <Tab icon={<DarkMode />} aria-label="" />
      </Tabs>
    </Headroom>
  );
};

export default Header;
