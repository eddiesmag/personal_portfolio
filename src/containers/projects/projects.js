import React, { lazy, Suspense, useEffect, useState, useContext } from 'react';
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
import { Masonry } from '@mui/lab';
import StyleContext from '../../contexts/StyleContext';
import Loading from '../../components/loading/loading';
import './styles/projects.scss';

const GithubRepoCard = lazy(() =>
  import('../../components/projects/githubRepoCard')
);

const Item = styled(Paper)(() => ({
  color: 'inherit',
  backgroundColor: 'inherit',
}));

const StyledMasonry = styled(Masonry)(() => ({
  color: 'inherit',
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

  const [gitHubProjects, setGitHubProjects] = useState([]);

  const [isInView, setIsInView] = useState(false);

  const [chipSelected, setChipSelected] = useState(null);
  const chipLabels = ['all', 'fullstack', 'backend', 'frontend'];

  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

  const [ref, inView] = useInView({
    threshold: 0,
    delay: 1000,
    triggerOnce: true,
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
          console.log(response.data.user);
          setRepoData(response.data.user.pinnedItems.edges);
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
    <Suspense fallback={<Loading />}>
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
            {gitHubProjects.map((repository, i) => {
              if (!repository) {
                console.error(
                  `Github object for repository number: ${i} is undefined`
                );
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
};

export default Projects;
