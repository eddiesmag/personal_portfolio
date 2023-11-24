import React from 'react';
import { Avatar, Grid, Link, useMediaQuery } from '@mui/material';
import { socialMediaLinks } from '../../portfolio';
import XTwitterIcon from './components/Xtwitter';
import { fadeInLeft } from '../../containers/greeting/styles/aninations';
import { GitHub, Mail, LinkedIn } from '@mui/icons-material';

import './styles/socialMedia.scss';

const SocialMedia = () => {
  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

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
        justifyContent: isMediumScreen || isSmallScreen ? 'center' : 'flex-start',
        alignItems: 'center',
        animation: `${fadeInLeft} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`
      }}>
      {socialMediaLinks.github ? (
        <Grid item className="social-icon">
          <Link href={socialMediaLinks.github} underline="none" color="inherit">
            <Avatar sx={{ bgcolor: '#000000' }}>
              <GitHub />
            </Avatar>
          </Link>
        </Grid>
      ) : null}

      {socialMediaLinks.linkedIn ? (
        <Grid item className="social-icon">
          <Link href={socialMediaLinks.linkedIn} underline="none" color="inherit">
            <Avatar sx={{ bgcolor: '#0077B5' }}>
              <LinkedIn />
            </Avatar>
          </Link>
        </Grid>
      ) : null}

      {socialMediaLinks.mail ? (
        <Grid item className="social-icon">
          <Link href={`mailto:${socialMediaLinks.mail}`} underline="none" color="inherit">
            <Avatar sx={{ bgcolor: '#c71610' }}>
              <Mail />
            </Avatar>
          </Link>
        </Grid>
      ) : null}

      {socialMediaLinks.x ? (
        <Grid item className="social-icon">
          <Link href={socialMediaLinks.x} underline="none" color="inherit">
            <Avatar sx={{ bgcolor: '#14171A' }}>
              <XTwitterIcon />
            </Avatar>
          </Link>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default SocialMedia;
