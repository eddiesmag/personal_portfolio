import React, { Suspense } from 'react';
import Lottie from 'lottie-react';

const DisplayLottie = ({ animationData }) => {
  const options = {
    loop: true,
    autoplay: true,
    animationData,
  };
  return (
    <Suspense>
      <Lottie
        animationData={options.animationData}
        loop={options.loop}
        autoPlay={options.autoplay}
      />
    </Suspense>
  );
};

export default DisplayLottie;
