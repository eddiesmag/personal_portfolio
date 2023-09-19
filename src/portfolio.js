import emoji from 'react-easy-emoji';
import splashAnimation from './assets/lottie/splashAnimation.json';
// splash screen
const splashScreen = {
  anabled: true,
  animation: splashAnimation,
  duration: 2000,
};

const introduction = {
  username: 'Edward Ssemwanga',
  title: "Hi all, I'm Edward",
  subTitle: emoji(
    'A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing', // Set to empty to hide the button
  displayGreeting: true,
};

export { splashScreen, introduction };
