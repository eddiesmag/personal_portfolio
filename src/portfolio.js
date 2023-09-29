import emoji from 'react-easy-emoji';
import splashAnimation from './assets/lottie/splashAnimation.json';
import manWaving from './assets/lottie/manWaving.json';
// splash screen
const splashScreen = {
  anabled: true,
  animation: splashAnimation,
  duration: 2000,
};

// summary and Greeting section

const introduction = {
  username: 'Edward Ssemwanga',
  title: "Hi all, I'm Edward",
  subTitle: emoji(
    'A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.'
  ),
  animation: manWaving,
  resumeLink:
    'https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing', // Set to empty to hide the button
  displayIntroduction: true,
};

// social  media links

const socialMediaLinks = {
  github: 'github',
  linkedIn: 'linkedin',
  mail: 'gmail',
  x: 'x',
  display: true, // change to true to disaplay social links
};

export { splashScreen, introduction, socialMediaLinks };
