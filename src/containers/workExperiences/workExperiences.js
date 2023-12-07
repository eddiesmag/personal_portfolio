import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator
} from '@mui/lab';
import { Grid, Grow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useResponsiveStyles } from '../../hooks/useResponsiveStyles';
import { educationInfo, workExperience } from '../../portfolio';

import './styles/workExperiences.scss';

const WorkExperience = () => {
  const [isInView, setIsInView] = useState(false);

  const [displayExperience, setDisplayExperience] = useState(workExperience.displayExperiences);
  const [displayEducation, setDisplayEducation] = useState(educationInfo.displaySchools);

  const [ref, inView] = useInView({
    threshold: 0,
    delay: 1000,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  useEffect(() => {
    const getExperience = () => {
      if (displayEducation) {
        setDisplayEducation(displayEducation);
      }

      if (displayExperience) {
        setDisplayExperience(displayExperience);
      }
    };

    getExperience();
  }, [displayEducation, displayExperience]);

  const { getTitleStyles, getSubTitleStyles, getBodyStyles } = useResponsiveStyles();

  const titleStyles = getTitleStyles();
  const subTitleStyles = getSubTitleStyles();
  const bodyStyles = getBodyStyles();

  return (
    <div ref={ref} id="experience">
      <Grid
        container
        direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row' }}
        pt={5}
        sx={{
          justifyContent: !displayEducation || !displayExperience ? 'flex-start' : 'center',
          alignItems: 'flex-start'
        }}>
        {displayExperience && (
          <Grid item lg={!displayEducation ? 12 : 6} md={!displayEducation ? 12 : 6} xs={12}>
            <Grow in={isInView}>
              <Timeline
                position="right"
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 2
                  }
                }}>
                <Typography variant="h3" gutterBottom pl={3} sx={{ ...titleStyles }}>
                  Experiences
                </Typography>

                {workExperience.experience.map((exp, i) => (
                  <TimelineItem key={i}>
                    <TimelineSeparator>
                      <TimelineDot variant="filled" className="timeline" />
                      <TimelineConnector className="timeline" />
                    </TimelineSeparator>

                    <TimelineContent>
                      <FontAwesomeIcon icon={faCalendarDays} className="calendar-icon" />
                      <Typography
                        className="timeline-duration"
                        variant="caption"
                        ml={2}
                        sx={{ display: 'inline-block' }}>
                        {exp.duration}
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom sx={{ ...subTitleStyles }}>
                        {exp.company}
                      </Typography>{' '}
                      <Typography variant="subtitle1" gutterBottom sx={{ ...subTitleStyles }}>
                        {exp.role}
                      </Typography>
                      <Typography variant="body2" gutterBottom sx={{ ...bodyStyles }}>
                        {exp.roleDesc}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grow>
          </Grid>
        )}
        {displayEducation && (
          <Grid item lg={!displayExperience ? 12 : 6} md={!displayExperience ? 12 : 6} xs={12}>
            <Grow
              in={isInView}
              style={{ transformOrigin: '0 0 0' }}
              {...(isInView ? { timeout: 1000 } : {})}>
              <Timeline
                position="right"
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 2
                  }
                }}>
                <Typography variant="h3" gutterBottom pl={3} sx={{ ...titleStyles }}>
                  Education
                </Typography>
                {educationInfo.schools.map((info, i) => (
                  <TimelineItem key={i}>
                    <TimelineSeparator>
                      <TimelineDot variant="filled" className="timeline" />
                      <TimelineConnector className="timeline" />
                    </TimelineSeparator>
                    <TimelineContent>
                      <FontAwesomeIcon icon={faCalendarDays} className="calendar-icon" />
                      <Typography
                        className="timeline-duration"
                        variant="caption"
                        ml={2}
                        sx={{ display: 'inline-block' }}>
                        {info.duration}
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom sx={{ ...subTitleStyles }}>
                        {info.schoolName}
                      </Typography>{' '}
                      <Typography variant="subtitle1" gutterBottom sx={{ ...subTitleStyles }}>
                        {info.achievement}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grow>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default WorkExperience;
