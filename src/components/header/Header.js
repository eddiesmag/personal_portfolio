import { MenuOutlined } from '@mui/icons-material';
import { Avatar, Tab, Tabs, useMediaQuery } from '@mui/material';
import React, { useState, useContext, useRef, useEffect } from 'react';
import Headroom from 'react-headroom';
import { Transition } from 'react-transition-group';

import MobileHeader from './MobileHeader';
import StyleContext from '../../contexts/StyleContext';
import { useResponsiveStyles } from '../../hooks/useResponsiveStyles';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import './styles/Header.scss';

const Header = () => {
  const { isDark } = useContext(StyleContext);

  const nodeRef = useRef(null);

  const [tabValue, setTabValue] = useState(0);

  const [showMobileHeader, setShowMobileHeader] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const [profile, setProfile] = useState({});

  const { getTabStyles } = useResponsiveStyles();
  const tabStyles = getTabStyles();

  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');
  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');

  useEffect(() => {
    const getProfile = () => {
      fetch('/githubProfile.json')
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((response) => {
          const { avatarUrl, name } = response.data.user;
          setProfile({ name, avatarUrl });
        })
        .catch((error) => console.error({ error }));
    };

    getProfile();
  }, []);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const toggleDrawer = () => {
    setOpenDrawer(true);
    setShowMobileHeader(!showMobileHeader);
  };

  const menu = [
    {
      name: 'Skills',
      path: '#skills'
    },
    {
      name: 'Work Experiences',
      path: '#experience'
    },
    {
      name: 'Open Source',
      path: '#openSource'
    },
    // {
    //   name: 'Achievements',
    //   path: '#achievements'
    // },
    // {
    //   name: 'Blogs',
    //   path: '#blogs'
    // },
    // {
    //   name: 'Talks',
    //   path: '#talks'
    // },
    {
      name: 'Contact Me',
      path: '#contact'
    }
  ];
  return (
    <Headroom>
      <Tabs
        className={isDark ? 'dark-menu' : 'menu'}
        value={tabValue}
        onChange={handleChange}
        sx={{
          '& .MuiTabs-flexContainer': {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: isMediumScreen || isSmallScreen ? 'flex-start' : 'center',
            alignItems: 'center',
            padding: '0.5rem'
          },
          '& .MuiTabs-indicator': {
            display: isMediumScreen || isSmallScreen ? 'none' : 'block',
            bgcolor: 'primary.main'
          }
        }}
        centered={false}
        textColor="inherit"
        variant={isMediumScreen || isSmallScreen ? 'standard' : 'fullWidth'}>
        <Tab
          href="/"
          label={profile.name}
          iconPosition={isMediumScreen || isSmallScreen ? 'start' : 'top'}
          icon={
            profile.avatarUrl && (
              <Avatar
                alt={profile.name}
                src={profile.avatarUrl}
                sx={{
                  width: '40px',
                  height: '40px',
                  mr: 1
                }}
              />
            )
          }
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            mr: isSmallScreen || isMediumScreen ? 'auto' : 0
          }}
        />
        {menu.map((menu, i) => (
          <Tab
            key={i}
            label={menu.name}
            href={menu.path}
            sx={{
              ...tabStyles,
              display: isSmallScreen || isMediumScreen ? 'none' : 'block',
              color: tabValue === ++i ? 'primary.main' : 'inherit'
            }}
          />
        ))}

        <ToggleSwitch />

        <Tab
          icon={
            <Avatar
              variant="circular"
              sx={{
                boxShadow: 3,
                color: 'primary.main',
                bgcolor: 'inherit',
                '&:hover': {
                  boxShadow: 5,
                  color: 'primary.light',
                  bgcolor: isDark ? 'secondary.light' : 'common.white'
                }
              }}>
              <MenuOutlined />
            </Avatar>
          }
          onClick={toggleDrawer}
          sx={{
            display: isMediumScreen || isSmallScreen ? 'block' : 'none'
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
            exit: 1000
          }}>
          <MobileHeader open={showMobileHeader} menu={menu} toggleDrawer={toggleDrawer} />
        </Transition>
      </Tabs>
    </Headroom>
  );
};

export default Header;
