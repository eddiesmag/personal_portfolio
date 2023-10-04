import React, { useContext } from 'react';
import { Fade, Grid, Typography, useMediaQuery } from '@mui/material';
import StyleContext from '../../contexts/StyleContext';
import { introduction } from '../../portfolio';
import emoji from 'react-easy-emoji';
import SocialMedia from '../../components/socialMedia/socialMedia';
import ButtonComp from '../../components/button/Button';
import DisplayLottie from '../../components/display-lottie/displayLottie';
import { fadeInLeft, fadeInRight } from './styles/aninations';
import './styles/greeting.scss';

const Greeting = () => {
  const { isDark } = useContext(StyleContext);

  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

  const getTitleStyles = () => {
    if (isSmallScreen) {
      return {
        fontSize: '1.7rem',
        lineHeight: 1,
      };
    } else if (isMediumScreen) {
      return {
        fontSize: '2rem',
        lineHeight: 1,
      };
    } else {
      return {
        fontSize: '3rem',
        lineHeight: 1.1,
      };
    }
  };

  const getSubTitleStyles = () => {
    if (isSmallScreen) {
      return {
        lineHeight: 1.7,
        fontSize: '1rem',
      };
    } else if (isMediumScreen) {
      return {
        lineHeight: 1.7,
        fontSize: '1.1rem',
      };
    } else {
      return {
        lineHeight: 2,
        fontSize: '1.3rem',
      };
    }
  };

  const getButtonStyles = () => {
    if (isSmallScreen || isMediumScreen) {
      return {
        justifyContent: 'center',
        alignItems: 'center',
      };
    }
    return {
      justifyContent: 'flex-start',
      alignItems: 'center',
    };
  };

  if (!introduction.displayIntroduction) {
    return null;
  }
  return (
    <Fade in={true} timeout={1000}>
      <Grid
        className="main"
        container
        direction={{ sx: 'column', sm: 'row', md: 'row' }}
        spacing={0}
        m={0}
        mt="4rem"
        p={2}
        sx={{
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Grid
          item
          lg={6}
          md={6}
          xs={12}
          sx={{
            textAlign: isSmallScreen || isMediumScreen ? 'center' : 'justify',
          }}
        >
          <div id="introduction">
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                ...getTitleStyles(),
                animation: `${fadeInLeft} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
              }}
              ml={isSmallScreen || isMediumScreen ? 'auto' : 5}
              pt={3}
            >
              {introduction.title}{' '}
              <span className="wave-emoji">{emoji('👋')}</span>
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                ...getSubTitleStyles(),
                color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
                animation: `${fadeInLeft} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
              }}
              ml={isSmallScreen || isMediumScreen ? 'auto' : 5}
              mt={5}
              mb={5} /** this changes after adding social meduim buttons* */
            >
              {introduction.subTitle}
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
                ...getButtonStyles(),
                animation: `${fadeInLeft} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
              }}
            >
              <Grid item lg={6} md={6} xs={6} mt={2}>
                <ButtonComp text="Contact Me" href="#contact" btnSize="large" />
              </Grid>
              <Grid item lg={6} md={6} xs={6} mt={2}>
                {introduction.resumeLink && (
                  <ButtonComp
                    text="See my resume"
                    newTab={true}
                    href="#"
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
          }}
        >
          <div className="introduction-image">
            <DisplayLottie animationData={introduction.animation} />
          </div>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default Greeting;
