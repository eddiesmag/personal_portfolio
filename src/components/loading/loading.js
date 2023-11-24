import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import styled from '@emotion/styled';

const StyledCircularProgress = styled(CircularProgress)(() => ({}));
const Loading = () => {
  return (
    <Box minHeight={200} sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      <Box sx={{ position: 'relative' }}>
        <StyledCircularProgress
          variant="determinate"
          size={40}
          thickness={4}
          value={100}
          sx={{
            color: (theme) => theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
          }}
        />
        <StyledCircularProgress
          variant="indeterminate"
          disableShrink
          size={40}
          thickness={4}
          sx={{
            position: 'absolute',
            left: 0,
            color: 'rgb(64, 123, 254)',
            animationDuration: '550ms'
          }}
        />
      </Box>
    </Box>
  );
};

export default Loading;
