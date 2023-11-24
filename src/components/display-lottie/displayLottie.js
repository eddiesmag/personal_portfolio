import React, { Suspense } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useMediaQuery } from '@mui/material';

const DisplayLottie = ({ animationData }) => {
  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const options = {
    loop: true,
    autoplay: true,
    animationData
  };
  return (
    <Suspense>
      <Player
        autoplay
        loop
        src={options.animationData}
        style={{ height: '100%', maxWidth: isSmallScreen ? '100%' : '50vw' }}
      />
    </Suspense>
  );
};

export default DisplayLottie;
