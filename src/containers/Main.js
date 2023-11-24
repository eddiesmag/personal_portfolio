import React, { useEffect, useState } from 'react';
import { StyleProvider } from '../contexts/StyleContext';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { splashScreen } from '../portfolio';
import SplashScreen from './splash-screen/splashScreen';
import Header from '../components/header/Header';
import Greeting from './greeting/Greeting';
import Skills from './skills/skills';
import StackProgress from './skillsProgress/skillsProgress';
import WorkExperience from './workExperiences/workExperiences';
import Projects from './projects/projects';
import Profile from './profile/profile';
import ScrollTopButton from './ScrollTop/scrollTop';
import Footer from './footer/footer';
import './Main.scss';

const Main = () => {
  /**
   * check user's them mode preference
   * useMediaQuery('(prefers-color-scheme: dark)')
   */
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  const [isDark, setIsDark] = useLocalStorage('isDark', prefersDarkMode.matches);

  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);

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
    <div className={isDark ? 'dark-mode' : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        {isShowingSplashAnimation && splashScreen.anabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            <StackProgress />
            <WorkExperience />
            <Projects />
            <Profile />
            <ScrollTopButton />
            <Footer />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
