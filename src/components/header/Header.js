import React, { useState, useContext, useRef } from 'react';
import { Tab, Tabs, useMediaQuery } from '@mui/material';
import { introduction } from '../../portfolio';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import StyleContext from '../../contexts/StyleContext';
import MobileHeader from './MobileHeader';
import { Menu } from '@mui/icons-material';
import { Transition } from 'react-transition-group';
import Headroom from 'react-headroom';
import './styles/Header.scss';

const Header = () => {
  const nodeRef = useRef(null);
  const { isDark } = useContext(StyleContext);
  const [value, setValue] = useState(0);
  const [showMobileHeader, setShowMobileHeader] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const menu = [
    {
      name: 'Skills',
      path: '#skills',
    },
    {
      name: 'Work Experiences',
      path: '#experience',
    },
    {
      name: 'Open Source',
      path: '#openSource',
    },
    {
      name: 'Achievements',
      path: '#achievements',
    },
    {
      name: 'Blogs',
      path: '#blogs',
    },
    {
      name: 'Talks',
      path: '#talks',
    },
    {
      name: 'Contact Me',
      path: '#contact',
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isMediumSize = useMediaQuery('(max-width: 991.98px)');

  const toggleDrawer = () => {
    setOpenDrawer(true);
    setShowMobileHeader(!showMobileHeader);
  };

  const getTitleStyles = () => {
    if (isMediumSize) {
      return {
        marginRight: 'auto',
        fontWeight: 'bold',
      };
    }
    return {};
  };

  return (
    <Headroom>
      <Tabs
        className={isDark ? 'dark-menu' : 'menu'}
        value={value}
        onChange={handleChange}
        sx={{
          '& .MuiTabs-flexContainer': {
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '0.5rem',
          },
          '& .MuiTabs-indicator': {
            display: isMediumSize ? 'none' : 'block',
          },
        }}
        centered={false}
        textColor="inherit"
        indicatorColor={isDark ? null : 'primary'}
        variant={isMediumSize ? 'standard' : 'fullWidth'}
      >
        <Tab
          href="/"
          label={
            <span href="/" className="title">
              <span className="grey-color mx">&lt;</span>
              <span> </span>
              <span>{introduction.username}</span>
              <span className="grey-color mx">{' /'}</span>
              <span className="grey-color mx">&gt;</span>
            </span>
          }
          sx={getTitleStyles()}
        />
        {menu.map((menu, i) => (
          <Tab
            key={i}
            label={menu.name}
            href={menu.path}
            sx={{ display: isMediumSize ? 'none' : 'block' }}
          />
        ))}

        <ToggleSwitch />

        <Tab
          icon={<Menu color="inherit" />}
          onClick={toggleDrawer}
          sx={{
            display: isMediumSize ? 'block' : 'none',
          }}
          aria-label="icon"
          color="inherit"
        />
        <Transition
          nodeRef={nodeRef}
          in={openDrawer}
          enter={true}
          exit={true}
          timeout={{
            appear: 1000,
            enter: 300,
            exit: 1000,
          }}
        >
          <MobileHeader
            open={showMobileHeader}
            menu={menu}
            toggleDrawer={toggleDrawer}
          />
        </Transition>
      </Tabs>
    </Headroom>
  );
};

export default Header;
