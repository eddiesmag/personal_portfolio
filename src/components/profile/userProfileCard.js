import { Box, Fade, Grid, Typography, useMediaQuery } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import GitHubContactCard from './gitHubContactCard';
import LinkedInProfileCard from './linkedInProfileCard';
import { useResponsiveStyles } from '../../hooks/useResponsiveStyles';
import { openToWork } from '../../portfolio';
import SocialMedia from '../socialMedia/socialMedia';

const UserProfileCard = ({ data }) => {
  const [isInView, setIsInView] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    delay: 1000
  });

  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

  const { getTitleStyles } = useResponsiveStyles();
  const titleStyles = getTitleStyles();

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
      <Typography variant="h3" gutterBottom sx={{ ...titleStyles }}>
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
