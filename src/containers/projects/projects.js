import React, { lazy, Suspense, useEffect, useState, useContext } from 'react';
import { Chip, Fade, Paper, Stack, styled, Typography, useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { Masonry } from '@mui/lab';
import StyleContext from '../../contexts/StyleContext';
import Loading from '../../components/loading/loading';
import { gitHubData } from '../../portfolio';
import './styles/projects.scss';

const GithubRepoCard = lazy(() => import('../../components/projects/githubRepoCard'));

const Item = styled(Paper)(() => ({
  color: 'inherit',
  backgroundColor: 'inherit'
}));

const StyledMasonry = styled(Masonry)(() => ({
  color: 'inherit',
  paddingLeft: '3rem',
  paddingRight: '1.8rem'
}));

const FailedLoading = () => null;
const renderLoading = () => <Loading />;

const Projects = () => {
  const { isDark } = useContext(StyleContext);

  const [gitHubProjects, setGitHubProjects] = useState([]);
  const [oldGitHubProjects, setOldGitHubProjects] = useState([]);

  const [isInView, setIsInView] = useState(false);

  const [chipSelected, setChipSelected] = useState(null);
  const chipLabels = ['all', 'fullstack', 'backend', 'frontend'];

  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

  const [ref, inView] = useInView({
    threshold: 0,
    delay: 1000,
    triggerOnce: true
  });
  useEffect(() => {
    const fetchGithubPinnedRepos = () => {
      fetch('/githubProfile.json')
        .then((result) => {
          if (result.ok) {
            return result.json();
          }
          return result;
        })
        .then((response) => {
          const items = response.data.user.pinnedItems.edges;

          const data = items.map((item) => {
            let stack;
            if (item.node.name === 'webpack-starter') {
              stack = 'backend';
            } else if (item.node.name === 'musuem_of_candy') {
              stack = 'frontend';
            } else if (item.node.name === 'pricing_panel') {
              stack = 'full stack';
            } else if (item.node.name === 'simple_photo_blog') {
              stack = 'backend';
            } else {
              stack = 'frontend';
            }

            return { ...item, stack };
          });
          setRepoData(data);
          setOldGitHubProjects(data);
        })
        .catch((error) => {
          console.error({ error });
          setRepoData([]);
        });
    };

    fetchGithubPinnedRepos();
  }, []);

  const setRepoData = (array) => {
    setGitHubProjects(array);
  };

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
    if (index === 0) {
      setRepoData(oldGitHubProjects);
    }
    if (index === 1) {
      setRepoData(oldGitHubProjects.filter((repo) => repo.stack === 'full stack'));
    }
    if (index === 2) {
      setRepoData(oldGitHubProjects.filter((repo) => repo.stack === 'backend'));
    }
    if (index === 3) {
      setRepoData(oldGitHubProjects.filter((repo) => repo.stack === 'frontend'));
    }
  };

  const getTitleStyles = () => {
    if (isSmallScreen) {
      return {
        color: isDark ? '#fff' : 'rgb(35, 39, 47)',
        fontSize: '1.7rem',
        lineHeight: 1
      };
    } else if (isMediumScreen) {
      return {
        color: isDark ? '#fff' : 'rgb(35, 39, 47)',
        fontSize: '2rem',
        lineHeight: 1
      };
    } else {
      return {
        color: isDark ? '#fff' : 'rgb(35, 39, 47)',
        fontSize: '3rem',
        lineHeight: 1.1
      };
    }
  };
  const getChipStyles = () => {
    if (isSmallScreen) {
      return {
        color: isDark ? 'inherit' : 'rgb(35, 39, 47)',
        lineHeight: 1.2,
        fontSize: '0.8rem'
      };
    }
    if (isMediumScreen) {
      return {
        color: isDark ? 'inherit' : 'rgb(35, 39, 47)',
        lineHeight: 1.5,
        fontSize: '1rem'
      };
    }
    return {
      color: isDark ? 'inherit' : 'secondary.light',
      lineHeight: 1.6,
      fontSize: '1.1rem'
    };
  };

  if (
    !(
      typeof gitHubProjects === 'string' &&
      gitHubProjects instanceof String &&
      gitHubData.displayProjects
    )
  ) {
    return (
      <Suspense fallback={renderLoading()}>
        <div id="openSource" ref={ref} style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h3" sx={{ ...getTitleStyles() }} pl={5} pt={5}>
            Open Source Projects
          </Typography>
          <Stack
            direction={isSmallScreen ? 'column' : 'row'}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="center"
            alignItems="center"
            pb={5}
            pt={5}>
            {chipLabels.map((label, i) => (
              <Chip
                key={label}
                size={isSmallScreen ? 'small' : 'medium'}
                label={
                  <Typography
                    variant="subtitle1"
                    sx={{
                      ...getChipStyles(),
                      textTransform: 'uppercase',
                      color: 'inherit'
                    }}>
                    {label}
                  </Typography>
                }
                onClick={() => handleOnClick(i)}
                variant={chipSelected === i ? 'outlined' : 'filled'}
                sx={{
                  color: 'secondary.contrastText',
                  bgcolor: 'primary.main',
                  '&.MuiChip-outlined': {
                    bgcolor: 'inherit',
                    color: isDark ? 'secondary.contrastText' : 'secondary.main',
                    borderColor: isDark ? 'secondary.contrastText' : 'secondary.main',
                    '&:hover': {
                      color: 'secondary.contrastText',
                      borderColor: 'primary.dark'
                    }
                  }
                }}
              />
            ))}
          </Stack>

          <Fade in={isInView} timeout={1000}>
            <StyledMasonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={{ xs: 1, sm: 2, md: 3 }}>
              {gitHubProjects.map((repository, i) => {
                if (!repository) {
                  console.error(`Github object for repository number: ${i} is undefined`);
                }
                return (
                  <Item key={repository.node.id}>
                    <GithubRepoCard repository={repository} />
                  </Item>
                );
              })}
            </StyledMasonry>
          </Fade>
        </div>
      </Suspense>
    );
  }
  return <FailedLoading />;
};

export default Projects;
