import React, { useContext } from 'react';
import { Fade, Grid, Typography } from '@mui/material';
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

  if (!introduction.displayIntroduction) {
    return null;
  }
  return (
    <Fade in={true} timeout={1000}>
      <Grid
        container
        direction="row"
        spacing={0}
        className="main"
        m="0px auto"
        mt="4rem"
        p={2}
        sx={{ justifyContent: 'center', alignItems: 'flex-start' }}
      >
        <Grid item xs={6}>
          <div id="introduction">
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontSize: '3rem',
                lineHeight: 1.1,
                animation: `${fadeInLeft} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
              }}
              ml={5}
              pt={3}
            >
              {introduction.title}{' '}
              <span className="wave-emoji">{emoji('👋')}</span>
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                lineHeight: 2,
                fontSize: '1.3rem',
                color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
                animation: `${fadeInLeft} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
              }}
              ml={5}
              mt={5}
              mb={5} /** this changes after adding social meduim buttons* */
            >
              {introduction.subTitle}
            </Typography>

            <SocialMedia />

            <Grid
              container
              direction="row"
              spacing={0}
              className="button-introduction"
              ml={5}
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                animation: `${fadeInLeft} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
              }}
            >
              <Grid item xs={4}>
                <ButtonComp text="Contact Me" href="#contact" btnSize="large" />
              </Grid>
              <Grid item xs={4}>
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
          xs={6}
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
