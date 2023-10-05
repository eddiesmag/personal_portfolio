import React from 'react';
import { Grid, Link, useMediaQuery } from '@mui/material';
import { socialMediaLinks } from '../../portfolio';
import XTwitterIcon from './components/Xtwitter';
import { fadeInLeft } from '../../containers/greeting/styles/aninations';
import { useContext } from 'react';
import { GitHub, Mail, LinkedIn } from '@mui/icons-material';
import StyleContext from '../../contexts/StyleContext';

import './styles/socialMedia.scss';

const SocialMedia = () => {
  const { isDark } = useContext(StyleContext);

  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

  const getIconStyles = () => {
    if (isSmallScreen) {
      return {
        fontSize: '20px',
      };
    }
    if (isMediumScreen) {
      return {
        fontSize: '25px',
      };
    }

    return {
      fontSize: '40px',
    };
  };
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <Grid
      container
      direction="row"
      spacing={2}
      pl={isSmallScreen || isMediumScreen ? 0 : 5}
      pb={isSmallScreen || isMediumScreen ? 5 : 10}
      sx={{
        justifyContent:
          isMediumScreen || isSmallScreen ? 'center' : 'flex-start',
        alignItems: 'center',
        animation: `${fadeInLeft} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
      }}
    >
      {socialMediaLinks.github ? (
        <Grid item className="social-icon">
          <Link href="#" underline="none" color="inherit">
            <GitHub sx={getIconStyles()} />
          </Link>
        </Grid>
      ) : null}

      {socialMediaLinks.linkedIn ? (
        <Grid item className="social-icon">
          <Link href="#" underline="none" color="inherit">
            <LinkedIn
              sx={{ ...getIconStyles(), color: isDark ? 'inherit' : '#0072b1' }}
            />
          </Link>
        </Grid>
      ) : null}

      {socialMediaLinks.mail ? (
        <Grid item className="social-icon">
          <Link href="#" underline="none" color="inherit">
            <Mail
              sx={{ ...getIconStyles(), color: isDark ? 'inherit' : '#c71610' }}
            />
          </Link>
        </Grid>
      ) : null}

      {socialMediaLinks.x ? (
        <Grid item className="social-icon">
          <Link href="#" underline="none" color="inherit">
            <XTwitterIcon sx={getIconStyles()} />
          </Link>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default SocialMedia;
