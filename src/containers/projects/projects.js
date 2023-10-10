import React, { useEffect, useRef, useState } from 'react';
import { Slide } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import GithubRepoCard from '../../components/projects/githubRepoCard';

const Projects = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const [inView] = useInView({
    threshold: 0,
    delay: 1000,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      {ref.current && (
        <Slide in={isInView} container={ref.current}>
          <div style={{ display: 'flex' }}>
            {[1, 2].map((i) => (
              <GithubRepoCard key={i} />
            ))}
          </div>
        </Slide>
      )}
    </div>
  );
};

export default Projects;
