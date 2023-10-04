import React, { useContext, useRef, useState, useEffect } from 'react';
import { Fade, Grid, Typography, useMediaQuery } from '@mui/material';
import StyleContext from '../../contexts/StyleContext';
import { skillsSection } from '../../portfolio';
import DisplayLottie from '../../components/display-lottie/displayLottie';
import SoftwareSkills from '../../components/softwareSkills/softwareSkills';
import { slideInBottom } from './styles/animations';

const Skills = () => {
  const { isDark } = useContext(StyleContext);
  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0, // Adjust the threshold as needed
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

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
      return { lineHeight: 1.7, fontSize: '1rem' };
    }
    if (isMediumScreen) {
      return { lineHeight: 1.7, fontSize: '1.1rem' };
    }
    return { lineHeight: 2, fontSize: '1.3rem' };
  };

  const animation = isVisible
    ? `${slideInBottom} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
    : '';

  return (
    <Grid
      container
      direction={{ sx: 'column', sm: 'row', md: 'row' }}
      spacing={0}
      ref={skillsRef}
      pt={0}
      pb={0}
      pr={5}
      pl={5}
      m={0}
      sx={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        animation,
      }}
    >
      <Fade in={true} timeout={1000}>
        <Grid
          item
          lg={6}
          md={6}
          xs={12}
          sx={{ order: isSmallScreen || isMediumScreen ? 2 : null }}
        >
          <DisplayLottie animationData={skillsSection.animation} />
        </Grid>
      </Fade>
      <Fade in={true} timeout={1000}>
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
                animation,
              }}
              key={i}
            >
              {skill}
            </Typography>
          ))}
        </Grid>
      </Fade>
    </Grid>
  );
};

export default Skills;
