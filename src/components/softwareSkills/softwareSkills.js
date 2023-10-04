import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Typography } from '@mui/material';
import { skillsSection } from '../../portfolio';
import './styles/softwareSkills.scss';
const SoftwareSkills = () => {
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
            size="3x"
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
