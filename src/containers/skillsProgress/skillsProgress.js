import { Box, Grid, Grow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import StackProgressBar from '../../components/skillsProgress/stackProgressBar';
import { useResponsiveStyles } from '../../hooks/useResponsiveStyles';
import { techStack } from '../../portfolio';

const StackProgress = () => {
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

  if (techStack.viewSkillsBar) {
    return (
      <Box ref={ref} mt={5}>
        <Grow
          in={isVisible}
          style={{ transformOrigin: '0 0 0' }}
          {...(isVisible ? { timeout: 1000 } : {})}>
          <Grid container direction="column" pt={5}>
            <Typography variant="h3" gutterBottom pl={5} sx={{ ...titleStyles }}>
              Proficiency
            </Typography>
            {techStack.experience.map((exp, i) => (
              <Box key={i} ml={5} mr={5} mb={3}>
                <Typography variant="subtitle1" gutterBottom sx={{ ...subTitleStyles }}>
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
