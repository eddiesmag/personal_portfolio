import { EmailOutlined, LocationOnOutlined, PhoneOutlined, WorkOutline } from '@mui/icons-material';
import { Box, Typography, Avatar } from '@mui/material';
import React from 'react';

import { useResponsiveStyles } from '../../hooks/useResponsiveStyles';
import { contactInfo } from '../../portfolio';

const GitHubContactCard = ({ data }) => {
  const { getSubTitleStyles } = useResponsiveStyles();
  const subTitleStyles = getSubTitleStyles();

  return (
    <Box component="div">
      <Typography
        variant="subtitle1"
        sx={{
          ...subTitleStyles,
          fontWeight: 'light'
        }}
        gutterBottom>
        {contactInfo.subTitle}
      </Typography>
      <Typography variant="subtitle1" sx={{ ...subTitleStyles, mb: 2 }} gutterBottom>
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
            <Typography variant="subtitle1" sx={{ ...subTitleStyles }}>
              Location
            </Typography>
            <Typography variant="subtitle2" sx={{ ...subTitleStyles, fontWeight: 'light' }}>
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
          <Typography variant="subtitle1" sx={{ ...subTitleStyles }}>
            Email
          </Typography>
          <Typography variant="subtitle2" sx={{ ...subTitleStyles, fontWeight: 'light' }}>
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
          <Typography variant="subtitle1" sx={{ ...subTitleStyles }}>
            Phone
          </Typography>
          <Typography variant="subtitle2" sx={{ ...subTitleStyles, fontWeight: 'light' }}>
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
          <Typography variant="subtitle1" sx={{ ...subTitleStyles }}>
            Work
          </Typography>
          <Typography variant="subtitle2" sx={{ ...subTitleStyles, fontWeight: 'light' }}>
            Open for opportinuties: {data.hireable}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default GitHubContactCard;
