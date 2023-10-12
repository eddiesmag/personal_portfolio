import React, { useEffect, useState } from 'react';
import {
  Chip,
  Fade,
  Paper,
  Stack,
  styled,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import GithubRepoCard from '../../components/projects/githubRepoCard';
import { Masonry } from '@mui/lab';

import './styles/projects.scss';
import { useContext } from 'react';
import StyleContext from '../../contexts/StyleContext';

const Item = styled(Paper)(() => ({
  backgroundColor: 'inherit',
}));

const StyledMasonry = styled(Masonry)(() => ({
  paddingLeft: '3rem',
  paddingRight: '1.8rem',
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  color: 'inherit',
  backgroundColor: 'rgb(64, 123, 254)',
  textTransform: 'uppercase',
  '&.MuiChip-outlined': {
    backgroundColor: 'inherit',
    color: 'inherit',
    borderColor: 'rgb(64, 123, 254)',
  },
}));

const Projects = () => {
  const { isDark, theme } = useContext(StyleContext);
  const [isInView, setIsInView] = useState(false);
  const [chipSelected, setChipSelected] = useState(null);

  const chipLabels = ['all', 'fullstack', 'backend', 'frontend'];

  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

  const heights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [gitProjects, setGitProjects] = useState(heights);

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

  const handleOnClick = (index) => {
    setChipSelected(index);
  };

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

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography
        variant="h3"
        sx={{
          ...getTitleStyles(),
        }}
        pl={5}
        pt={5}
      >
        Open Source Projects
      </Typography>
      <Stack
        direction={isSmallScreen ? 'column' : 'row'}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="center"
        alignItems="center"
        pb={5}
        pt={5}
      >
        {chipLabels.map((label, i) => (
          <StyledChip
            key={label}
            size={isSmallScreen ? 'small' : 'medium'}
            label={
              <Typography
                variant="subtitle2"
                sx={{
                  color: isDark ? 'inherit' : 'rgb(35, 39, 47)',
                }}
              >
                {label}
              </Typography>
            }
            onClick={() => handleOnClick(i)}
            variant={chipSelected === i ? 'outlined' : 'filled'}
            theme={theme}
          />
        ))}
      </Stack>

      <Fade in={isInView} timeout={1000}>
        <StyledMasonry
          columns={{ xs: 1, sm: 2, md: 3 }}
          spacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {gitProjects.map((height, i) => (
            <Item key={i}>
              {height}
              <GithubRepoCard />
            </Item>
          ))}
        </StyledMasonry>
      </Fade>
    </div>
  );
};

export default Projects;
