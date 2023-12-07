import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Typography } from '@mui/material';
import React from 'react';

import { useResponsiveStyles } from '../../hooks/useResponsiveStyles';
import { skillsSection } from '../../portfolio';
import './styles/softwareSkills.scss';

const SoftwareSkills = () => {
  const { getIconStyles } = useResponsiveStyles();
  const iconStyles = getIconStyles();
  return (
    <Grid
      container
      direction="row"
      spacing={5}
      sx={{ justifyContent: 'center', alignItems: 'center' }}
      mb={5}>
      {skillsSection.skillSet.map((skill, i) => (
        <Grid
          item
          key={i}
          sx={{
            textAlign: 'center'
          }}>
          <FontAwesomeIcon
            icon={skill.fontAwesomeClassName}
            size={iconStyles}
            className="skill-icon"
          />
          <Typography
            variant="caption"
            gutterBottom
            sx={{ display: 'block' }}
            className="skill-caption">
            {skill.skillsName}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};
export default SoftwareSkills;
