import React, { useContext, useState, useEffect } from 'react';
import { Box, Fade, Grid, Typography, useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import StyleContext from '../../contexts/StyleContext';
import GitHubContactCard from './gitHubContactCard';
import LinkedInProfileCard from './linkedInProfileCard';
import SocialMedia from '../socialMedia/socialMedia';
import { openToWork } from '../../portfolio';

const UserProfileCard = ({ data }) => {
  const { isDark } = useContext(StyleContext);
  const [isInView, setIsInView] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    delay: 1000
  });

  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [data, inView]);

  if (openToWork.isHireable) {
    data.hireable = 'Yes';
  } else {
    data.hireable = 'No';
  }

  const getTitleStyles = () => {
    if (isSmallScreen) {
      return {
        color: isDark ? '#fff' : 'rgb(35, 39, 47)',
        fontSize: '1.7rem',
        lineHeight: 1
      };
    } else if (isMediumScreen) {
      return {
        color: isDark ? '#fff' : 'rgb(35, 39, 47)',
        fontSize: '2rem',
        lineHeight: 1
      };
    } else {
      return {
        color: isDark ? '#fff' : 'rgb(35, 39, 47)',
        fontSize: '3rem',
        lineHeight: 1.1
      };
    }
  };

  return (
    <Box
      ref={ref}
      component="div"
      id="contact"
      mt={5}
      pl={5}
      pr={5}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
      <Typography variant="h3" gutterBottom sx={{ ...getTitleStyles() }}>
        Reachout to me!
      </Typography>
      <Fade in={isInView} timeout={1000}>
        <Grid
          container
          direction={'row'}
          spacing={2}
          sx={{
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}>
          <Grid item lg={8} md={8} xs={12}>
            <GitHubContactCard data={data} />
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <LinkedInProfileCard data={data} />
          </Grid>
        </Grid>
      </Fade>
      <Box
        sx={{
          alignSelf: isMediumScreen ? 'center' : 'flex-start',
          pl: isMediumScreen || isSmallScreen ? 0 : 3,
          pt: 3
        }}>
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default UserProfileCard;
