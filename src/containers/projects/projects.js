import React, { useEffect, useState } from 'react';
import { Fade, Grid } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import GithubRepoCard from '../../components/projects/githubRepoCard';

const Projects = () => {
  const [isInView, setIsInView] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0,
    delay: 1000,
    triggerOnce: true,
  });

  useEffect(() => {
    const setInView = () => {
      if (inView) {
        return setIsInView(true);
      }
    };
    setInView();
  }, [inView]);

  return (
    <div ref={ref}>
      <Fade in={isInView} timeout={1000}>
        <Grid
          container
          direction="row"
          spacing={2}
          m={0}
          p={0}
          pr={5}
          pl={3}
          sx={{
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          {[12, 4, 4].map((item, i) => (
            <Grid key={i} item lg={6} md={6} xs={12}>
              <GithubRepoCard />
            </Grid>
          ))}
        </Grid>
      </Fade>
    </div>
  );
};

export default Projects;
