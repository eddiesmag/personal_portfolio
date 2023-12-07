import { Box, Fade, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import emoji from 'react-easy-emoji';

import { fadeInLeft, fadeInRight } from './styles/aninations';
import ButtonComp from '../../components/button/Button';
import DisplayLottie from '../../components/display-lottie/displayLottie';
import SocialMedia from '../../components/socialMedia/socialMedia';
import { useResponsiveStyles } from '../../hooks/useResponsiveStyles';
import { introduction } from '../../portfolio';
import './styles/greeting.scss';

const Greeting = () => {
  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

  const { getTitleStyles, getSubTitleStyles, getButtonStyles } = useResponsiveStyles();

  const titleStyles = getTitleStyles();
  const subTitleStyles = getSubTitleStyles();
  const buttonStyles = getButtonStyles();

  if (!introduction.displayIntroduction) {
    return null;
  }
  return (
    <Fade in={true} timeout={1000}>
      <Grid
        className="main"
        container
        direction={{ xs: 'column', sm: 'row', md: 'row' }}
        spacing={0}
        m={0}
        mt="4rem"
        p={[2, 2, 0, 2]}
        sx={{
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>
        <Grid
          item
          lg={6}
          md={6}
          xs={12}
          sx={{
            textAlign: isSmallScreen || isMediumScreen ? 'center' : 'justify'
          }}>
          <div id="introduction">
            <Typography
              variant="h3"
              gutterBottom
              className="title"
              sx={{
                ...titleStyles,
                animation: `${fadeInLeft} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`
              }}
              ml={isSmallScreen || isMediumScreen ? 'auto' : 5}
              pt={3}>
              {introduction.title}{' '}
              <Box className="wave-emoji" component="span">
                {emoji('👋')}
              </Box>
            </Typography>

            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                ...subTitleStyles,
                animation: `${fadeInLeft} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`
              }}
              ml={isSmallScreen || isMediumScreen ? 'auto' : 5}
              mt={5}>
              {introduction.subTitle}
            </Typography>

            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{
                ...getSubTitleStyles(),
                animation: `${fadeInLeft} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`
              }}
              ml={isSmallScreen || isMediumScreen ? 'auto' : 5}
              mt={5}
              mb={2}>
              Get in touch
            </Typography>

            <SocialMedia />

            <Grid
              container
              direction={isSmallScreen || isMediumScreen ? 'column' : 'row'}
              spacing={0}
              className="button-introduction"
              pl={isSmallScreen || isMediumScreen ? 0 : 5}
              lg={12}
              item
              sx={{
                ...buttonStyles,
                animation: `${fadeInLeft} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`
              }}>
              <Grid item lg={6} md={6} xs={6} mt={2}>
                <ButtonComp text="Contact Me" href="#contact" btnSize="large" />
              </Grid>
              <Grid item lg={6} md={6} xs={6} mt={2}>
                {introduction.resumeLink && (
                  <ButtonComp
                    text="See my resume"
                    newTab={true}
                    href={introduction.resumeLink}
                    btnSize="large"
                  />
                )}
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          xs={12}
          sx={{
            animation: `${fadeInRight} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Box component="div" className="introduction-image">
            <DisplayLottie animationData={introduction.animation} />
          </Box>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default Greeting;
