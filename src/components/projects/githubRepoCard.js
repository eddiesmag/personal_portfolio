import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  SvgIcon,
  Typography,
  useMediaQuery
} from '@mui/material';
import { useContext } from 'react';
import StyleContext from '../../contexts/StyleContext';
import formatFileSizeDisplay from '../../utils/utils';
import GithubRepoModal from './githubRepoModal';
import './styles/githubRepoCard.scss';

const GithubRepoCard = ({ repository }) => {
  const { isDark } = useContext(StyleContext);

  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

  const { name, id, url, description, diskUsage, forkCount, primaryLanguage, stargazers } =
    repository.node;

  const getBodyStyles = () => {
    if (isSmallScreen) {
      return {
        color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
        textAlign: 'justify',
        lineHeight: 1.1,
        fontSize: '0.7rem'
      };
    } else if (isMediumScreen) {
      return {
        color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
        textAlign: 'justify',
        lineHeight: 1.2,
        fontSize: '0.8rem'
      };
    } else {
      return {
        color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
        textAlign: 'justify',
        lineHeight: 1.5,
        fontSize: '1rem'
      };
    }
  };

  const getSubTitleStyles = () => {
    if (isSmallScreen) {
      return {
        color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
        lineHeight: 1.2,
        fontSize: '0.8rem'
      };
    }
    if (isMediumScreen) {
      return {
        color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
        lineHeight: 1.5,
        fontSize: '1rem'
      };
    }
    return {
      color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
      lineHeight: 1.6,
      fontSize: '1.1rem'
    };
  };

  const openRepoInNewTab = (url, name) => {
    if (!url) {
      console.log(`URL in ${name} is undefined`);
      return;
    }

    const tab = window.open(url, '_blank');
    tab.focus();
  };
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <Card
      sx={{
        maxWidh: 345,
        backgroundColor: 'inherit',
        color: isDark ? 'secondary.contrastText' : 'secondary.main'
      }}
      variant="elevation">
      <CardActionArea id={id} onClick={() => openModal()}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'primary.light' }}>
              <SvgIcon>
                <svg
                  aria-hidden="true"
                  height="20"
                  role="img"
                  viewBox="0 0 12 16"
                  width="14"
                  fill={'#FFF'}>
                  <path
                    fillRule="evenodd"
                    d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path>
                </svg>
              </SvgIcon>
            </Avatar>
          }
          title={<Typography variant="subTitle1">{name}</Typography>}
          sx={{
            ...getSubTitleStyles(),
            fontWeight: 'bold'
          }}
        />

        <Divider />

        <CardContent>
          <Typography variant="body2" sx={{ ...getBodyStyles() }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions className="repo-stats">
          <Box className="repo-left-stat">
            {primaryLanguage !== null && (
              <Box component="span">
                <Box className="language-color" sx={{ backgroundColor: primaryLanguage.color }} />
                <Typography
                  variant="caption"
                  sx={{ color: isDark ? 'inherit' : 'rgb(120, 131, 155)' }}>
                  {primaryLanguage.name}
                </Typography>
              </Box>
            )}

            <Box component="span">
              <svg
                aria-hidden="true"
                className="octicon repo-stat-svg"
                height="20"
                role="img"
                viewBox="0 0 10 16"
                width="12"
                fill="rgb(106, 115, 125)">
                <path
                  fillRule="evenodd"
                  d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>
              </svg>
              <Typography
                variant="caption"
                sx={{ color: isDark ? 'inherit' : 'rgb(120, 131, 155)' }}>
                {forkCount}
              </Typography>
            </Box>

            <Box component="span">
              <svg
                aria-hidden="true"
                className="octicon repo-stat-svg"
                height="20"
                role="img"
                viewBox="0 0 14 16"
                width="14"
                fill="rgb(106, 115, 125)">
                <path
                  fillRule="evenodd"
                  d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
              </svg>
              <Typography
                variant="caption"
                sx={{ color: isDark ? 'inherit' : 'rgb(120, 131, 155)' }}>
                {stargazers.totalCount}
              </Typography>
            </Box>
          </Box>
          <Box className="repo-right-stat">
            <Typography variant="caption" sx={{ color: isDark ? 'inherit' : 'rgb(120, 131, 155)' }}>
              {formatFileSizeDisplay(diskUsage)}
            </Typography>
          </Box>
        </CardActions>
      </CardActionArea>
      <GithubRepoModal
        repository={repository.node}
        open={modalOpen}
        close={closeModal}
        openProject={() => openRepoInNewTab(url, name)}
      />
    </Card>
  );
};

export default GithubRepoCard;
