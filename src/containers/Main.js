import React, { useEffect, useState } from 'react';
import { splashScreen } from '../portfolio';
import SplashScreen from './splash-screen/splashScreen';
import Header from '../components/header/Header';
import './Main.scss';

const Main = () => {
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);
  useEffect(() => {
    if (splashScreen.anabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => clearTimeout(splashTimer);
    }
  }, []);
  return (
    <div>
      {/* 1. add dark-mode */}
      {isShowingSplashAnimation && splashScreen.anabled ? (
        <SplashScreen />
      ) : (
        <>
          {
            // add components here
            <Header />
          }
        </>
      )}
    </div>
  );
};

export default Main;
