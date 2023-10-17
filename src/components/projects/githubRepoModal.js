import React, { useContext } from 'react';
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Grid,
  Modal,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import StyleContext from '../../contexts/StyleContext';

const modalStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'absolute',
  width: '100%',
  height: '100%',
  overflow: 'scroll',
  bgcolor: 'background.paper',
};

const closeBtnStyles = {
  alignSelf: 'flex-end',
  mt: 2,
  mb: 2,
  mr: 2,
  display: 'block',
  color: 'grey',
  borderRadius: '100%',
  cursor: 'pointer',
};

const GithubRepoModal = ({ repository, open, close, openProject }) => {
  const { isDark } = useContext(StyleContext);
  const { name, description, primaryLanguage } = repository;

  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

  const Project = name.replaceAll('_', ' ');

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

  const getTitleStyles = () => {
    if (isSmallScreen) {
      return { fontSize: '1.7rem', lineHeight: 1 };
    }

    if (isMediumScreen) {
      return { fontSize: '2rem', lineHeight: 1 };
    }

    return { fontSize: '3rem', lineHeight: 1.1 };
  };

  const getBodyStyles = () => {
    if (isSmallScreen) {
      return {
        lineHeight: 1.2,
        fontSize: '0.8rem',
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
    <Modal
      open={open}
      onClose={close}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 1000,
        },
      }}
      sx={{ color: 'inherit' }}
    >
      <Fade in={open}>
        <Box
          sx={{
            ...modalStyles,
            color: isDark ? '#FFF' : 'rgb(35, 39, 47)',
            bgcolor: isDark ? 'rgb(35, 39, 47)' : '#FFF',
          }}
        >
          <Box sx={closeBtnStyles}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              size="3x"
              style={{
                color: isDark ? 'rgb(209, 214, 225)' : 'rgb(35, 39, 47)',
              }}
              onClick={close}
            />
          </Box>

          <Grid
            container
            direction="row"
            spacing={2}
            m={0}
            pl={5}
            pr={5}
            sx={{
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
            }}
          >
            <Grid item lg={6} md={6} xs={12}>
              <Typography variant="h6">{Project}</Typography>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <Typography
                variant="h3"
                gutterBottom
                sx={{ ...getTitleStyles(), textTransform: 'capitalize' }}
              >
                {Project}
              </Typography>
              {primaryLanguage !== null && (
                <Box sx={{ mb: 1 }}>
                  <Typography
                    variant="body1"
                    component="span"
                    gutterBottom
                    sx={{ ...getSubTitleStyles() }}
                  >
                    {`Language: `}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="span"
                    gutterBottom
                    sx={{ ...getSubTitleStyles() }}
                  >
                    {primaryLanguage.name}
                  </Typography>
                </Box>
              )}
              <Typography
                variant="body2"
                gutterBottom
                sx={{ ...getBodyStyles }}
              >
                {description}
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={openProject}
                sx={{ mt: 5 }}
              >
                View in GitHub
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
};

export default GithubRepoModal;
