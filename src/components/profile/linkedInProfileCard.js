import { LinkedIn } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  useMediaQuery
} from '@mui/material';
import React, { useContext, useState } from 'react';

import StyleContext from '../../contexts/StyleContext';
import { socialMediaLinks } from '../../portfolio';

const LinkedInProfileCard = ({ data }) => {
  const { isDark } = useContext(StyleContext);

  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

  const [linkedInProfileUrl] = useState(socialMediaLinks.linkedIn);

  const openLinkedInProfile = () => {
    window.open(linkedInProfileUrl, '_blank');
  };

  const getLinkedInProfileBtnStyles = () => {
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
        transition: 'ease-in 0.2s'
      }
    };
  };

  const getLinkedInBtnTextStyles = () => {
    if (isSmallScreen) {
      return {
        lineHeight: 1.2,
        fontSize: '0.8rem'
      };
    }
    if (isMediumScreen) {
      return {
        lineHeight: 1.5,
        fontSize: '1rem'
      };
    }
    return {
      lineHeight: 1.6,
      fontSize: '1.1rem'
    };
  };
  return (
    <Card
      sx={{
        color: isDark ? '#fff' : '#23272f',
        minWidth: !(isMediumScreen || isSmallScreen) ? 300 : 100,
        bgcolor: isDark ? 'inherit' : '#fff'
      }}>
      <CardHeader
        title={
          <Box
            component="div"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
            <Typography variant="h6" component="h2" sx={{ color: isDark ? 'inherit' : '#0077B5' }}>
              Linked
            </Typography>
            <LinkedIn
              sx={{
                fontSize: 30,
                color: isDark ? 'inherit' : '#0077B5'
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
            ...getLinkedInProfileBtnStyles()
          }}
          onClick={openLinkedInProfile}>
          <Typography
            className=""
            variant="body2"
            component="p"
            sx={{
              ...getLinkedInBtnTextStyles(),
              color: isDark ? 'inherit' : '#0077B5'
            }}>
            View Profile
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LinkedInProfileCard;
