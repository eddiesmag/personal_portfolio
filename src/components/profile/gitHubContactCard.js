import React, { useContext } from 'react';
import { EmailOutlined, LocationOnOutlined, PhoneOutlined, WorkOutline } from '@mui/icons-material';
import { Box, Typography, Avatar, useMediaQuery } from '@mui/material';
import StyleContext from '../../contexts/StyleContext';
import { contactInfo } from '../../portfolio';

const GitHubContactCard = ({ data }) => {
  const { isDark } = useContext(StyleContext);

  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

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
  return (
    <Box component="div">
      <Typography
        variant="subtitle1"
        sx={{
          ...getSubTitleStyles(),
          fontWeight: 'light'
        }}
        gutterBottom>
        {contactInfo.subTitle}
      </Typography>
      <Typography variant="subtitle1" sx={{ ...getSubTitleStyles(), mb: 2 }} gutterBottom>
        {data.bio}
      </Typography>
      {data.location && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            mb: 2
          }}>
          <Avatar sx={{ bgcolor: 'primary.main', mr: 3 }}>
            <LocationOnOutlined />
          </Avatar>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start'
            }}>
            <Typography variant="subtitle1" sx={{ ...getSubTitleStyles() }}>
              Location
            </Typography>
            <Typography variant="subtitle2" sx={{ ...getSubTitleStyles(), fontWeight: 'light' }}>
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
          mb: 2
        }}>
        <Avatar sx={{ bgcolor: 'primary.main', mr: 3 }}>
          <EmailOutlined />
        </Avatar>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}>
          <Typography variant="subtitle1" sx={{ ...getSubTitleStyles() }}>
            Email
          </Typography>
          <Typography variant="subtitle2" sx={{ ...getSubTitleStyles(), fontWeight: 'light' }}>
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
          mb: 2
        }}>
        <Avatar sx={{ bgcolor: 'primary.main', mr: 3 }}>
          <PhoneOutlined />
        </Avatar>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}>
          <Typography variant="subtitle1" sx={{ ...getSubTitleStyles() }}>
            Phone
          </Typography>
          <Typography variant="subtitle2" sx={{ ...getSubTitleStyles(), fontWeight: 'light' }}>
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
          mb: 2
        }}>
        <Avatar sx={{ bgcolor: 'primary.main', mr: 3 }}>
          <WorkOutline />
        </Avatar>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}>
          <Typography variant="subtitle1" sx={{ ...getSubTitleStyles() }}>
            Work
          </Typography>
          <Typography variant="subtitle2" sx={{ ...getSubTitleStyles(), fontWeight: 'light' }}>
            Open for opportinuties: {data.hireable}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default GitHubContactCard;
