import { Grid, Link } from '@mui/material';
import React from 'react';
import { socialMediaLinks } from '../../portfolio';
import { GitHub, Mail, LinkedIn } from '@mui/icons-material';
import './styles/socialMedia.scss';
import XTwitterIcon from './components/Xtwitter';
import { fadeInLeft } from '../../containers/greeting/styles/aninations';
import { useContext } from 'react';
import StyleContext from '../../contexts/StyleContext';

const SocialMedia = () => {
  const { isDark } = useContext(StyleContext);
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <Grid
      container
      direction="row"
      spacing={2}
      pl={5}
      pb={10}
      sx={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        animation: `${fadeInLeft} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
      }}
    >
      {socialMediaLinks.github ? (
        <Grid item>
          <Link href="#" underline="none" color="inherit">
            <GitHub sx={{ fontSize: '40px' }} />
          </Link>
        </Grid>
      ) : null}

      {socialMediaLinks.linkedIn ? (
        <Grid item>
          <Link href="#" underline="none" color="inherit">
            <LinkedIn
              href="./"
              sx={{ fontSize: '40px', color: isDark ? 'inherit' : '#0072b1' }}
            />
          </Link>
        </Grid>
      ) : null}

      {socialMediaLinks.mail ? (
        <Grid item>
          <Link href="#" underline="none" color="inherit">
            <Mail
              sx={{ fontSize: '40px', color: isDark ? 'inherit' : '#c71610' }}
            />
          </Link>
        </Grid>
      ) : null}

      {socialMediaLinks.x ? (
        <Grid item>
          <Link href="#" underline="none" color="inherit">
            <XTwitterIcon sx={{ fontSize: '40px' }} />
          </Link>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default SocialMedia;
