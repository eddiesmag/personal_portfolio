import React, { useContext } from 'react';
import { Fade, Grid, Typography } from '@mui/material';
import StyleContext from '../../contexts/StyleContext';
import { skillsSection } from '../../portfolio';
import emoji from 'react-easy-emoji';
import DisplayLottie from '../../components/display-lottie/displayLottie';

const Greeting = () => {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade in={true} timeout={1000}>
      <Grid
        className="main"
        container
        direction={{ sx: 'column', sm: 'row', md: 'row' }}
        spacing={0}
        m="0px"
        mt="4rem"
        p={2}
        sx={{ justifyContent: 'center', alignItems: 'flex-start' }}
      >
        <Grid item lg={6} md={6} xs={12} sx={{}}>
          <div className="introduction-image">
            <DisplayLottie animationData={skillsSection.animation} />
          </div>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <div id="introduction">
            <Typography variant="h3" gutterBottom pt={3}>
              {skillsSection.title}{' '}
              <span className="wave-emoji">{emoji('👋')}</span>
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
              }}
              mt={5}
              mb={5}
            >
              {skillsSection.subTitle}
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
              }}
              mt={5}
              mb={5}
            >
              {skillsSection.skills.map((skill, i) => (
                <div key={i}>{skill}</div>
              ))}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default Greeting;
