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
import getGithubPinnedRepos from './core/githubAPI.JS';
import axios from 'axios';

const {
  REACT_APP_GITHUB_API_BASE_URL,
  REACT_APP_GITHUB_USERNAME,
  REACT_APP_GITHUB_TOKEN,
} = process.env;

const GithubRepoCard = lazy(() =>
  import('../../components/projects/githubRepoCard')
);

const heights = [1, 12, 76, 79, 20, 6, 64, 67, 23, 45, 97, 54];

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

  const [gitHubProjects, setGitHubProjects] = useState(heights);

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
    const fetchGithubPinnedRepos = async () => {
      try {
        const reponse = await axios.get(
          `${REACT_APP_GITHUB_API_BASE_URL}/users/${REACT_APP_GITHUB_USERNAME}/repos`,
          {
            headers: {
              Authorization: `token ${REACT_APP_GITHUB_TOKEN}`,
            },
          }
        );
        const data = reponse.data;
        // const pinned = data('.pinned-item-list-item.public');
        console.log(data);
      } catch (error) {
        console.log(`Error Fetching Data: ${error}`);
      }
    };

    fetchGithubPinnedRepos();
  }, []);

  useEffect(() => {
    const setInView = () => {
      if (inView) {
        return setIsInView(true);
      }
    };
    setInView();
  }, [inView]);

  const getPrimeNumbers = (numbers) => {
    const isPrime = (num) => {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
      }
      return true;
    };

    return numbers.filter((val) => isPrime(val));
  };

  const handleOnClick = (index) => {
    setChipSelected(index);

    if (index === 0) {
      setGitHubProjects(heights);
    }
    if (index === 1) {
      setGitHubProjects(heights.filter((val) => val % 2 === 0));
    }

    if (index === 2) {
      setGitHubProjects(getPrimeNumbers(heights));
    }
    if (index === 3) {
      setGitHubProjects(heights.filter((val) => val % 2 !== 0));
    }
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
            {gitHubProjects.map((height, i) => (
              <Item key={i}>
                {height}
                <GithubRepoCard />
              </Item>
            ))}
          </StyledMasonry>
        </Fade>
      </div>
    </Suspense>
  );
};

export default Projects;
