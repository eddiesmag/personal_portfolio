import React from 'react';
import DisplayLottie from '../../components/display-lottie/displayLottie';
import { splashScreen, introduction } from '../../portfolio';
import './splashScreen.css';
const SplashScreen = () => {
  return (
    <div className="splash-container">
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        <span className="grey-color">&lt;</span>
        <span className="splash-title">{`${introduction.username}`}</span>
        <span className="grey-color">{` /`}</span>
        <span className="grey-color">&gt;</span>
      </div>
    </div>
  );
};
export default SplashScreen;
