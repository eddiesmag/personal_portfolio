import { Fade, Grid, Typography, useMediaQuery } from '@mui/material';
import React, { useContext, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { fadeInBck } from './styles/animations';
import DisplayLottie from '../../components/display-lottie/displayLottie';
import SoftwareSkills from '../../components/softwareSkills/softwareSkills';
import StyleContext from '../../contexts/StyleContext';
import { useResponsiveStyles } from '../../hooks/useResponsiveStyles';
import { skillsSection } from '../../portfolio';

const Skills = () => {
  const { isDark } = useContext(StyleContext);

  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const { getTitleStyles, getSubTitleStyles } = useResponsiveStyles();

  const titleStyles = getTitleStyles();
  const subTitleStyles = getSubTitleStyles();

  const animation = `${fadeInBck} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`;
  return (
    <div ref={ref} id="skills">
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
          alignItems: 'flex-start'
        }}>
        <Fade
          in={isVisible}
          timeout={isVisible ? 1000 : 0}
          style={{ transitionDelay: isVisible ? '200ms' : '500ms', animation }}>
          <Grid
            item
            lg={6}
            md={6}
            xs={12}
            sx={{
              order: isSmallScreen || isMediumScreen ? 2 : null
            }}>
            <DisplayLottie animationData={skillsSection.animation} />
          </Grid>
        </Fade>
        <Fade
          in={isVisible}
          timeout={isVisible ? 1000 : 0}
          style={{ transitionDelay: isVisible ? '200ms' : '500ms', animation }}>
          <Grid
            item
            lg={6}
            md={6}
            xs={12}
            sx={{
              textAlign: 'justify'
            }}>
            <Typography variant="h3" gutterBottom sx={{ ...titleStyles }}>
              {skillsSection.title}
            </Typography>

            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                ...subTitleStyles,
                color: isDark ? 'inherit' : '#4f5258'
              }}
              mt={5}
              mb={5}>
              {skillsSection.subTitle}
            </Typography>

            <SoftwareSkills />

            {skillsSection.skills.map((skill, i) => (
              <Typography
                variant="subTitle1"
                gutterBottom
                sx={{
                  ...subTitleStyles,
                  color: isDark ? 'inherit' : '#4f5258',
                  display: 'block'
                }}
                key={i}>
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
