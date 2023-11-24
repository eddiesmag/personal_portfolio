import React, { useEffect, useState, useContext } from 'react';
import { Box, Grid, Grow, Typography, useMediaQuery } from '@mui/material';
import { techStack } from '../../portfolio';
import { useInView } from 'react-intersection-observer';
import StackProgressBar from '../../components/skillsProgress/stackProgressBar';
import StyleContext from '../../contexts/StyleContext';

const StackProgress = () => {
  const { isDark } = useContext(StyleContext);
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

  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

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

  const getSubTitleStyles = () => {
    if (isSmallScreen) {
      return {
        color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
        lineHeight: 1.2,
        fontSize: '0.8rem'
      };
    }
    if (isMediumScreen) {
      return {
        color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
        lineHeight: 1.5,
        fontSize: '1rem'
      };
    }
    return {
      color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
      lineHeight: 1.6,
      fontSize: '1.1rem'
    };
  };

  if (techStack.viewSkillsBar) {
    return (
      <Box ref={ref} mt={5}>
        <Grow
          in={isVisible}
          style={{ transformOrigin: '0 0 0' }}
          {...(isVisible ? { timeout: 1000 } : {})}>
          <Grid container direction="column" pt={5}>
            <Typography variant="h3" gutterBottom pl={5} sx={getTitleStyles()}>
              Proficiency
            </Typography>
            {techStack.experience.map((exp, i) => (
              <Box key={i} ml={5} mr={5} mb={3}>
                <Typography variant="subtitle1" gutterBottom sx={getSubTitleStyles()}>
                  {exp.stack}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '100%', mr: 1 }}>
                    <StackProgressBar value={exp.progressPercentage} />
                  </Box>
                  <Box sx={{ minWidth: 35 }}>
                    <Typography variant="caption">{`${exp.progressPercentage} %`}</Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grow>
      </Box>
    );
  }
  return null;
};

export default StackProgress;
