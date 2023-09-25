import React, { useEffect, useState } from 'react';
import { splashScreen } from '../portfolio';
import SplashScreen from './splash-screen/splashScreen';
import Header from '../components/header/Header';
import './Main.scss';
import { StyleProvider } from '../contexts/StyleContext';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Main = () => {
  /**
   * check user's mode preference
   * useMediaQuery('(prefers-color-scheme: dark)')
   */
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  const [isDark, setIsDark] = useLocalStorage(
    'isDark',
    prefersDarkMode.matches
  );

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

  const changeTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <div className={isDark ? 'dark-menu' : 'mode'}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        {isShowingSplashAnimation && splashScreen.anabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
