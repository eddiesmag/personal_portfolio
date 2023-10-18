import React, { useState } from 'react';
import { Avatar, Box, Fade, Grid, SvgIcon, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { contactInfo, openToWork } from '../../portfolio';
import SocialMedia from '../socialMedia/socialMedia';

const GitHubProfileCard = ({ data }) => {
  const [isInView, setIsInView] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    delay: 1000,
  });

  useEffect(() => {
    console.log(data);

    if (inView) {
      setIsInView(true);
    }
  }, [data, inView]);

  if (openToWork.isHireable) {
    data.hireable = 'Yes';
  } else {
    data.hireable = 'No';
  }

  return (
    <Box ref={ref} component="div" mt={5} pl={5} pr={5}>
      <Typography variant="h3" gutterBottom>
        Reachout to me!
      </Typography>
      <Fade in={isInView} timeout={1000}>
        <Grid
          container
          direction="row"
          spacing={2}
          sx={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <Grid item lg={8} md={8} xs={8}>
            <Typography variant="subtitle1" gutterBottom>
              {contactInfo.subTitle}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {data.bio}
            </Typography>
            {data.location && (
              <Box>
                <SvgIcon>
                  <svg
                    viewBox="-0.5 -2 20 19"
                    version="1.1"
                    width="22"
                    height="16"
                    aria-hidden="true"
                    stroke="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                    ></path>
                  </svg>
                </SvgIcon>
                <Typography variant="subtitle1" gutterBottom component="span">
                  {data.location}
                </Typography>
              </Box>
            )}
            <Typography variant="subtitle1" gutterBottom component="span">
              Open for opportinuties:
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="span">
              {data.hireable}
            </Typography>
            <Box p={5}>
              <SocialMedia />
            </Box>
          </Grid>
          <Grid item lg={4} md={4} xs={4}>
            <Avatar
              alt={data.name}
              src={data.avatarUrl}
              sx={{ width: '100%', height: 'auto' }}
            />
          </Grid>
        </Grid>
      </Fade>
    </Box>
  );
};

export default GitHubProfileCard;
