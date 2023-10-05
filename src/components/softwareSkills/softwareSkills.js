import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import { skillsSection } from '../../portfolio';
import './styles/softwareSkills.scss';

const SoftwareSkills = () => {
  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

  const getIconStyles = () => {
    if (isSmallScreen) {
      return '1x';
    }
    if (isMediumScreen) {
      return '2x';
    }

    return '3x';
  };
  return (
    <Grid
      container
      direction="row"
      spacing={5}
      sx={{ justifyContent: 'center', alignItems: 'center' }}
      mb={5}
    >
      {skillsSection.skillSet.map((skill, i) => (
        <Grid
          item
          key={i}
          sx={{
            textAlign: 'center',
          }}
        >
          <FontAwesomeIcon
            icon={skill.fontAwesomeClassName}
            size={getIconStyles()}
            className="skill-icon"
          />
          <Typography
            variant="caption"
            gutterBottom
            sx={{ display: 'block' }}
            className="skill-caption"
          >
            {skill.skillsName}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};
export default SoftwareSkills;
