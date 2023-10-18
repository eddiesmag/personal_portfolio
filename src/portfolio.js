import emoji from 'react-easy-emoji';
import splashAnimation from './assets/lottie/splashAnimation.json';
import manWaving from './assets/lottie/manWaving.json';
import manWorking from './assets/lottie/manWorking.json';
import {
  faJs,
  faReact,
  faHtml5,
  faNode,
  faDocker,
  faAws,
  faCss3,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

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

// skills section
const skillsSection = {
  title: 'What I do',
  subTitle:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas placeat eaque ipsam omnis, deleniti perferendis, labore, itaque quo delectus voluptas beatae aliquam consectetur sed neque dolores nam doloribus distinctio veritatis.',
  animation: manWorking,
  skills: [
    emoji(
      '⚡️ Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas placeat eaque ipsam omnis, deleniti perferendis, labore, itaque quo delectus voluptas beatae aliquam consectetur sed neque dolores nam doloribus distinctio veritatis.'
    ),
    emoji(
      '⚡️ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam saepe ea facilis. Tempora sint velit et veritatis tenetur quibusdam quae magni ipsa consectetur itaque qui ad sed autem, provident necessitatibus?'
    ),
    emoji('⚡️ skill 3'),
  ],
  skillSet: [
    {
      skillsName: 'html-5',
      fontAwesomeClassName: faHtml5,
    },
    {
      skillsName: 'sass',
      fontAwesomeClassName: faSass,
    },
    {
      skillsName: 'css3',
      fontAwesomeClassName: faCss3,
    },
    {
      skillsName: 'Javascript',
      fontAwesomeClassName: faJs,
    },
    {
      skillsName: 'Reactjs',
      fontAwesomeClassName: faReact,
    },
    {
      skillsName: 'Nodejs',
      fontAwesomeClassName: faNode,
    },
    {
      skillsName: 'React Native',
      fontAwesomeClassName: faReact,
    },
    {
      skillsName: 'aws',
      fontAwesomeClassName: faAws,
    },
    {
      skillsName: 'PostgreSQL',
      fontAwesomeClassName: faDatabase,
    },
    {
      skillsName: 'MongoDB',
      fontAwesomeClassName: faDatabase,
    },
    {
      skillsName: 'Prisma',
      fontAwesomeClassName: faDatabase,
    },
    {
      skillsName: 'docker',
      fontAwesomeClassName: faDocker,
    },
  ],
  display: true,
};

// stack progress

const techStack = {
  viewSkillsBar: true,
  experience: [
    {
      stack: 'Server-side (Backend)',
      progressPercentage: 90,
    },
    {
      stack: 'Database',
      progressPercentage: 80,
    },
    {
      stack: 'Client-side (Frontend/Design)',
      progressPercentage: 70,
    },
  ],
};

// Professional Experience

const workExperience = {
  displayExperiences: true,
  experience: [
    {
      role: 'Job Title',
      company: 'Company',
      duration: 'May 2004 - present',
      roleDesc:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius et nesciunt minima praesentium exercitationem mollitia, velit vero expedita sed distinctio quibusdam similique in necessitatibus veniam hic alias placeat aliquam laudantium!',
    },
    {
      role: 'Job Title',
      company: 'Company',
      duration: 'May 2004 - present',
      roleDesc:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius et nesciunt minima praesentium exercitationem mollitia, velit vero expedita sed distinctio quibusdam similique in necessitatibus veniam hic alias placeat aliquam laudantium!',
    },
    {
      role: 'Job Title',
      company: 'Company',
      duration: 'May 2004 - present',
      roleDesc:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius et nesciunt minima praesentium exercitationem mollitia, velit vero expedita sed distinctio quibusdam similique in necessitatibus veniam hic alias placeat aliquam laudantium!',
    },
    {
      role: 'Job Title',
      company: 'Company',
      duration: 'May 2004 - present',
      roleDesc:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius et nesciunt minima praesentium exercitationem mollitia, velit vero expedita sed distinctio quibusdam similique in necessitatibus veniam hic alias placeat aliquam laudantium!',
    },
  ],
};

const educationInfo = {
  displaySchools: true, // change to false to hide academic background section
  schools: [
    {
      schoolName: 'Makerere University',
      duration: '2014 - 2019',
      achievement: 'Bachelor of Science in Software Engineering',
    },
    {
      schoolName: 'Seeta High School',
      duration: '2012 - 2013',
      achievement:
        'Uganda Advanced Certificate of Education. Physics, Mathematics, Economics',
    },
  ],
};

const gitHubData = {
  showGitHubProfile: true, // set true or false to show GitHub user profile using GitHub, dafaults to true
  displayProjects: true,
};

const openToWork = {
  isHireable: true, // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subTitle:
    'Discuss a project or just want to day hi? My inbox is open to all.',
  phone: '+256787656528 | +256706732405',
  email_address: 'eddiesmag@gmail.com',
};

export {
  splashScreen,
  introduction,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperience,
  educationInfo,
  gitHubData,
  openToWork,
  contactInfo,
};
