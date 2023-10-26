import React, { useContext, useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Fade,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { contactInfo, openToWork, socialMediaLinks } from '../../portfolio';
import SocialMedia from '../socialMedia/socialMedia';
import StyleContext from '../../contexts/StyleContext';
import {
  EmailOutlined,
  LinkedIn,
  LocationOnOutlined,
  PhoneOutlined,
  WorkOutline,
} from '@mui/icons-material';

const GitHubProfileCard = ({ data }) => {
  const { isDark } = useContext(StyleContext);
  const [isInView, setIsInView] = useState(false);

  const [linkedInProfileUrl] = useState(socialMediaLinks.linkedIn);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    delay: 1000,
  });

  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [data, inView]);

  if (openToWork.isHireable) {
    data.hireable = 'Yes';
  } else {
    data.hireable = 'No';
  }

  const openLinkedInProfile = () => {
    window.open(linkedInProfileUrl, '_blank');
  };

  const getTitleStyles = () => {
    if (isSmallScreen) {
      return {
        color: isDark ? '#fff' : 'rgb(35, 39, 47)',
        fontSize: '1.7rem',
        lineHeight: 1,
      };
    } else if (isMediumScreen) {
      return {
        color: isDark ? '#fff' : 'rgb(35, 39, 47)',
        fontSize: '2rem',
        lineHeight: 1,
      };
    } else {
      return {
        color: isDark ? '#fff' : 'rgb(35, 39, 47)',
        fontSize: '3rem',
        lineHeight: 1.1,
      };
    }
  };

  const getSubTitleStyles = () => {
    if (isSmallScreen) {
      return {
        color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
        lineHeight: 1.2,
        fontSize: '0.8rem',
      };
    }
    if (isMediumScreen) {
      return {
        color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
        lineHeight: 1.5,
        fontSize: '1rem',
      };
    }
    return {
      color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
      lineHeight: 1.6,
      fontSize: '1.1rem',
    };
  };
  const getProfileBtnStyles = () => {
    return {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '2rem',
      maxWidth: '50%',
      height: 'auto',
      backgroundColor: 'inherit',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      border: isDark ? '1px solid #FFF' : '1px solid #0077B5',
      padding: '0.2rem 1rem',
      marginTop: 2,
      '&:hover': {
        bgcolor: 'inherit',
        cursor: 'pointer',
        boxShadow: 3,
        transition: 'ease-in 0.2s',
      },
    };
  };

  const getChipStyles = () => {
    if (isSmallScreen) {
      return {
        lineHeight: 1.2,
        fontSize: '0.8rem',
      };
    }
    if (isMediumScreen) {
      return {
        lineHeight: 1.5,
        fontSize: '1rem',
      };
    }
    return {
      lineHeight: 1.6,
      fontSize: '1.1rem',
    };
  };

  return (
    <Box
      ref={ref}
      component="div"
      id="contact"
      mt={5}
      pl={5}
      pr={5}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ ...getTitleStyles() }}>
        Reachout to me!
      </Typography>
      <Fade in={isInView} timeout={1000}>
        <Grid
          container
          direction={'row'}
          spacing={2}
          sx={{
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Grid item lg={8} md={8} xs={12}>
            <Typography
              variant="subtitle1"
              sx={{
                ...getSubTitleStyles(),
                fontWeight: 'light',
              }}
              gutterBottom
            >
              {contactInfo.subTitle}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ ...getSubTitleStyles(), mb: 2 }}
              gutterBottom
            >
              {data.bio}
            </Typography>
            {data.location && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  mb: 2,
                }}
              >
                <Avatar sx={{ bgcolor: 'rgb(64, 123, 254)', mr: 3 }}>
                  <LocationOnOutlined />
                </Avatar>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ ...getSubTitleStyles() }}
                  >
                    Location
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ ...getSubTitleStyles(), fontWeight: 'light' }}
                  >
                    Kampala, {data.location}
                  </Typography>
                </Box>
              </Box>
            )}

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Avatar sx={{ bgcolor: 'rgb(64, 123, 254)', mr: 3 }}>
                <EmailOutlined />
              </Avatar>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}
              >
                <Typography variant="subtitle1" sx={{ ...getSubTitleStyles() }}>
                  Email
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ ...getSubTitleStyles(), fontWeight: 'light' }}
                >
                  {contactInfo.email_address}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Avatar sx={{ bgcolor: 'rgb(64, 123, 254)', mr: 3 }}>
                <PhoneOutlined />
              </Avatar>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}
              >
                <Typography variant="subtitle1" sx={{ ...getSubTitleStyles() }}>
                  Phone
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ ...getSubTitleStyles(), fontWeight: 'light' }}
                >
                  {contactInfo.phone}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Avatar sx={{ bgcolor: 'rgb(64, 123, 254)', mr: 3 }}>
                <WorkOutline />
              </Avatar>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}
              >
                <Typography variant="subtitle1" sx={{ ...getSubTitleStyles() }}>
                  Work
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ ...getSubTitleStyles(), fontWeight: 'light' }}
                >
                  Open for opportinuties: {data.hireable}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card
              sx={{
                color: isDark ? '#fff' : 'rgb(35, 39, 47)',
                minWidth: !(isMediumScreen || isSmallScreen) ? 300 : 100,
                bgcolor: isDark ? 'inherit' : '#fff',
              }}
            >
              <CardHeader
                title={
                  <Box
                    component="div"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{ color: isDark ? 'inherit' : '#0077B5' }}
                    >
                      Linked
                    </Typography>
                    <LinkedIn
                      sx={{
                        fontSize: 30,
                        color: isDark ? 'inherit' : '#0077B5',
                      }}
                    />
                  </Box>
                }
                sx={{ bgcolor: isDark ? '#313335' : '#CACCCE' }}
              />

              <Divider />

              <CardContent sx={{ bgcolor: isDark ? '#000000' : '#FFFFFF' }}>
                <Avatar
                  src={data.avatarUrl}
                  alt="LinkedIn profile picture"
                  sx={{ mb: 2, mt: 1, width: '150px', height: 'auto' }}
                />
                <Typography variant="body1" component="p" gutterBottom>
                  {data.name}
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                  {data.bio}
                </Typography>
                <Box
                  sx={{
                    ...getProfileBtnStyles(),
                  }}
                  onClick={openLinkedInProfile}
                >
                  <Typography
                    className=""
                    variant="body2"
                    component="p"
                    sx={{
                      ...getChipStyles(),
                      color: isDark ? 'inherit' : '#0077B5',
                    }}
                  >
                    View Profile
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Fade>
      <Box
        sx={{
          alignSelf: isMediumScreen ? 'center' : 'flex-start',
          pl: isMediumScreen || isSmallScreen ? 0 : 3,
          pt: 3,
        }}
      >
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default GitHubProfileCard;
