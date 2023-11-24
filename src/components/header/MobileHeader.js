import React, { useState, useContext, useEffect } from 'react';
import { Close } from '@mui/icons-material';
import { Box, Drawer, Tab, useMediaQuery } from '@mui/material';
import StyleContext from '../../contexts/StyleContext';
import './styles/Header.scss';

const MobileHeader = ({ menu, open, toggleDrawer }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [drawer, setDrawer] = useState('right');

  const { isDark } = useContext(StyleContext);

  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

  useEffect(() => {
    try {
      if (isSmallScreen) {
        return setDrawer('bottom');
      }
      if (isMediumScreen) {
        return setDrawer('top');
      }
    } catch (error) {
      console.log(error);
    }
  }, [drawer, isMediumScreen, isSmallScreen, toggleDrawer]);

  const handleSelectiom = (menu, index) => {
    setSelectedTab(index);
    toggleDrawer();
  };

  return (
    <Drawer
      anchor={drawer}
      open={open}
      onClose={toggleDrawer}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          backgroundColor: isDark ? 'rgb(35, 39, 47)' : '#FFF',
          color: isDark ? '#FFF' : 'rgb(35, 39, 47)'
        }
      }}>
      <Box className="mobile_menu_wrapper">
        <Tab icon={<Close />} aria-label="icon" color="inherit" onClick={toggleDrawer} />
        <Box className="mobile_menu_list">
          <ul className="ls-none">
            {menu.map((menu, i) => (
              <li key={i}>
                <Tab
                  href={menu.path}
                  color="inherit"
                  label={menu.name}
                  key={i}
                  onClick={() => handleSelectiom(menu, i)}
                  className={selectedTab === i ? 'selected-item' : ''}
                  sx={{
                    fontWeight: selectedTab === i ? 'bold' : 'light',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignContent: 'center',
                    minWidth: '100%',
                    color: selectedTab === i ? 'rgb(64, 123, 254)' : 'inherit'
                  }}
                />
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileHeader;
