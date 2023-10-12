import React, { useEffect, useState } from 'react';
import { Box, Grid, Grow, Typography, useMediaQuery } from '@mui/material';
import { techStack } from '../../portfolio';
import { useInView } from 'react-intersection-observer';
import StackProgressBar from '../../components/skillsProgress/stackProgressBar';

const StackProgress = () => {
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

  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

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

  if (techStack.viewSkillsBar) {
    return (
      <div ref={ref}>
        <Grow
          in={isVisible}
          style={{ transformOrigin: '0 0 0' }}
          {...(isVisible ? { timeout: 1000 } : {})}
        >
          <Grid container direction="column" pt={5}>
            <Typography variant="h3" gutterBottom pl={5} sx={getTitleStyles()}>
              Proficiency
            </Typography>
            {techStack.experience.map((exp, i) => (
              <Box key={i} ml={5} mr={5}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={getSubTitleStyles()}
                >
                  {exp.stack}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '100%', mr: 1 }}>
                    <StackProgressBar value={exp.progressPercentage} />
                  </Box>
                  <Box sx={{ minWidth: 35 }}>
                    <Typography variant="caption">
                      {`${exp.progressPercentage} %`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grow>
      </div>
    );
  }
  return null;
};

export default StackProgress;
