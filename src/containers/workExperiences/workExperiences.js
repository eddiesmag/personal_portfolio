import React, { useContext } from 'react';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from '@mui/lab';
import { Grid, Grow, Typography, useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { educationInfo, workExperience } from '../../portfolio';
import StyleContext from '../../contexts/StyleContext';

import './styles/workExperiences.scss';

const WorkExperience = () => {
  const { isDark } = useContext(StyleContext);
  const [isInView, setIsInView] = useState(false);

  const [displayExperience, setDisplayExperience] = useState(
    workExperience.displayExperiences
  );
  const [displayEducation, setDisplayEducation] = useState(
    educationInfo.displaySchools
  );

  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

  const [ref, inView] = useInView({
    threshold: 0,
    delay: 1000,
    triggerOnce: true,
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

  const getTitleStyles = () => {
    if (isSmallScreen) {
      return {
        fontSize: '1.7rem',
        lineHeight: 1,
      };
    } else if (isMediumScreen) {
      return {
        fontSize: '2rem',
        lineHeight: 1,
      };
    } else {
      return {
        fontSize: '3rem',
        lineHeight: 1.1,
      };
    }
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

  const getBodyStyles = () => {
    if (isSmallScreen) {
      return {
        lineHeight: 1.1,
        fontSize: '0.7rem',
      };
    } else if (isMediumScreen) {
      return {
        lineHeight: 1.2,
        fontSize: '0.8rem',
      };
    } else {
      return {
        lineHeight: 1.5,
        fontSize: '1rem',
      };
    }
  };

  return (
    <div ref={ref}>
      <Grid
        container
        direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row' }}
        pt={5}
        sx={{
          justifyContent:
            !displayEducation || !displayExperience ? 'flex-start' : 'center',
          alignItems: 'flex-start',
        }}
      >
        {displayExperience && (
          <Grid
            item
            lg={!displayEducation ? 12 : 6}
            md={!displayEducation ? 12 : 6}
            xs={12}
          >
            <Grow in={isInView}>
              <Timeline
                position="right"
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 2,
                  },
                }}
              >
                <Typography
                  variant="h3"
                  gutterBottom
                  pl={3}
                  sx={{ ...getTitleStyles() }}
                >
                  Experiences
                </Typography>

                {workExperience.experience.map((exp, i) => (
                  <TimelineItem key={i}>
                    <TimelineSeparator>
                      <TimelineDot variant="filled" className="timeline" />
                      <TimelineConnector className="timeline" />
                    </TimelineSeparator>

                    <TimelineContent>
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="calendar-icon"
                      />
                      <Typography
                        className="timeline-duration"
                        variant="caption"
                        ml={2}
                        sx={{ display: 'inline-block' }}
                      >
                        {exp.duration}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{
                          color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
                          ...getSubTitleStyles(),
                        }}
                      >
                        {exp.company}
                      </Typography>{' '}
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        sx={{
                          color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
                          ...getSubTitleStyles(),
                        }}
                      >
                        {exp.role}
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        sx={{
                          color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
                          textAlign: 'justify',
                          ...getBodyStyles(),
                        }}
                      >
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
          <Grid
            item
            lg={!displayExperience ? 12 : 6}
            md={!displayExperience ? 12 : 6}
            xs={12}
          >
            <Grow
              in={isInView}
              style={{ transformOrigin: '0 0 0' }}
              {...(isInView ? { timeout: 1000 } : {})}
            >
              <Timeline
                position="right"
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 2,
                  },
                }}
              >
                <Typography
                  variant="h3"
                  gutterBottom
                  pl={3}
                  sx={{ ...getTitleStyles() }}
                >
                  Education
                </Typography>
                {educationInfo.schools.map((info, i) => (
                  <TimelineItem key={i}>
                    <TimelineSeparator>
                      <TimelineDot variant="filled" className="timeline" />
                      <TimelineConnector className="timeline" />
                    </TimelineSeparator>
                    <TimelineContent>
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="calendar-icon"
                      />
                      <Typography
                        className="timeline-duration"
                        variant="caption"
                        ml={2}
                        sx={{ display: 'inline-block' }}
                      >
                        {info.duration}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        sx={{
                          ...getSubTitleStyles(),
                          color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
                        }}
                      >
                        {info.schoolName}
                      </Typography>{' '}
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        sx={{
                          ...getSubTitleStyles(),
                          textAlign: 'justify',
                          color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
                        }}
                      >
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
