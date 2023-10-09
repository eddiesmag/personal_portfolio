import React from 'react';
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
import { Box, Card, CardContent, Grid, Grow, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { workExperience } from '../../portfolio';

import './styles/workExperiences.scss';

const WorkExperience = () => {
  const [isInView, setIsInView] = useState(false);

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

  if (workExperience.displayExperiences) {
    return (
      <div ref={ref}>
        <Grid
          container
          direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row' }}
          pt={5}
          sx={{ justifyContent: 'center', alignItems: 'flex-start' }}
        >
          <Grid item lg={6} md={6} xs={12}>
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
                <Typography variant="h3" gutterBottom pl={3}>
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
                        variant="caption"
                        ml={2}
                        sx={{ display: 'inline-block' }}
                      >
                        {exp.date}
                      </Typography>
                      <Typography variant="h6">{exp.company}</Typography>{' '}
                      <Typography variant="subtitle1">{exp.role}</Typography>
                      <Typography variant="body2">{exp.roleDesc}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grow>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Grow
              in={isInView}
              style={{ transformOrigin: '0 0 0' }}
              {...(isInView ? { timeout: 1000 } : {})}
            >
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 2,
                  },
                }}
              >
                <Typography variant="h3" gutterBottom pl={3}>
                  Education
                </Typography>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    Eat
                    <Typography variant="body2">
                      More Content Goes Here
                    </Typography>
                    <Box
                      sx={{ width: 100, height: 100, backgroundColor: 'red' }}
                    >
                      <Typography variant="body1">Box content</Typography>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Eat</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>Eat</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent>Code</TimelineContent>
                </TimelineItem>
              </Timeline>
            </Grow>
          </Grid>
        </Grid>
      </div>
    );
  }
  return null;
};

export default WorkExperience;
