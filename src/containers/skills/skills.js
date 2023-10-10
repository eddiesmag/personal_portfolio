import React, { useContext, useState, useEffect } from 'react';
import { skillsSection } from '../../portfolio';
import { fadeInBck } from './styles/animations';
import StyleContext from '../../contexts/StyleContext';
import { useInView } from 'react-intersection-observer';
import { Fade, Grid, Typography, useMediaQuery } from '@mui/material';
import DisplayLottie from '../../components/display-lottie/displayLottie';
import SoftwareSkills from '../../components/softwareSkills/softwareSkills';

const Skills = () => {
  const { isDark } = useContext(StyleContext);
  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const getTitleStyles = () => {
    if (isSmallScreen) {
      return { fontSize: '1.7rem', lineHeight: 1 };
    }

    if (isMediumScreen) {
      return { fontSize: '2rem', lineHeight: 1 };
    }

    return { fontSize: '3rem', lineHeight: 1.1 };
  };

  const getSubTitleStyles = () => {
    if (isSmallScreen) {
      return {
        lineHeight: 1.2,
        fontSize: '0.8rem',
      };
    } else if (isMediumScreen) {
      return {
        lineHeight: 1.5,
        fontSize: '1rem',
      };
    } else {
      return {
        lineHeight: 1.6,
        fontSize: '1.1rem',
      };
    }
  };

  const animation = `${fadeInBck} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`;
  return (
    <div ref={ref}>
      <Grid
        container
        direction={{ sx: 'column', sm: 'row', md: 'row' }}
        spacing={0}
        pt={0}
        pb={0}
        pr={5}
        pl={5}
        m={0}
        sx={{
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Fade
          in={isVisible}
          timeout={isVisible ? 1000 : 0}
          style={{ transitionDelay: isVisible ? '200ms' : '500ms', animation }}
        >
          <Grid
            item
            lg={6}
            md={6}
            xs={12}
            sx={{
              order: isSmallScreen || isMediumScreen ? 2 : null,
            }}
          >
            <DisplayLottie animationData={skillsSection.animation} />
          </Grid>
        </Fade>
        <Fade
          in={isVisible}
          timeout={isVisible ? 1000 : 0}
          style={{ transitionDelay: isVisible ? '200ms' : '500ms', animation }}
        >
          <Grid
            item
            lg={6}
            md={6}
            xs={12}
            sx={{
              textAlign: 'justify',
            }}
          >
            <Typography variant="h3" gutterBottom sx={{ ...getTitleStyles() }}>
              {skillsSection.title}
            </Typography>

            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                ...getSubTitleStyles(),
                color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
              }}
              mt={5}
              mb={5}
            >
              {skillsSection.subTitle}
            </Typography>

            <SoftwareSkills />

            {skillsSection.skills.map((skill, i) => (
              <Typography
                variant="subTitle1"
                gutterBottom
                sx={{
                  ...getSubTitleStyles(),
                  color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
                  display: 'block',
                }}
                key={i}
              >
                {skill}
              </Typography>
            ))}
          </Grid>
        </Fade>
      </Grid>
    </div>
  );
};

export default Skills;
