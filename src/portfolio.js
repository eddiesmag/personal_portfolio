import {
  faJs,
  faReact,
  faHtml5,
  faNode,
  faDocker,
  faAws,
  faCss3,
  faSass
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import emoji from 'react-easy-emoji';

import manWaving from './assets/lottie/manWaving.json';
import manWorking from './assets/lottie/manWorking.json';
import splashAnimation from './assets/lottie/splashAnimation.json';

// splash screen
const splashScreen = {
  anabled: true,
  animation: splashAnimation,
  duration: 2000
};

// summary and Greeting section

const introduction = {
  username: 'Edward Ssemwanga',
  title: "Hi all, I'm Edward",
  subTitle: emoji(
    'A passionate Full Stack Software Developer 🚀 with experience of building Web and Mobile applications using Node.js / TypeScript / React.js / React Native and some other cool libraries and frameworks. Team player with a strong ability to perform and adapt effectively. Always willing to learn 👍.'
  ),
  animation: manWaving,
  resumeLink: 'https://drive.google.com/file/d/1tOa0tZxK24jwevYofCDHQyUThfWDBhz2/view?usp=sharing', // Set to empty to hide the button
  displayIntroduction: true
};

// social  media links

const socialMediaLinks = {
  github: 'https://github.com/eddiesmag',
  linkedIn: 'https://www.linkedin.com/in/edward-ssemwanga-125502a8/',
  mail: 'eddiesmag@gmail.com',
  x: 'https://twitter.com/SmagEddie',
  display: true // change to true to disaplay social links
};

// skills section
const skillsSection = {
  title: 'What I do',
  subTitle: emoji(
    '⚡️ Crafting full-stack web and mobile applications with Node.js, TypeScript, React.js and React Native.'
  ),
  animation: manWorking,
  skills: [
    emoji('⚡️ Expert in utilizing industry-standard libraries for seamless, scalable solutions.'),
    emoji('⚡️ Proficient in MongoDB, PostgreSQL, and GraphQL for optimal data management.'),
    emoji('⚡️ Stay updated on tech trends for innovative software solutions.')
  ],
  skillSet: [
    {
      skillsName: 'html-5',
      fontAwesomeClassName: faHtml5
    },
    {
      skillsName: 'sass',
      fontAwesomeClassName: faSass
    },
    {
      skillsName: 'css3',
      fontAwesomeClassName: faCss3
    },
    {
      skillsName: 'Javascript',
      fontAwesomeClassName: faJs
    },
    {
      skillsName: 'Reactjs',
      fontAwesomeClassName: faReact
    },
    {
      skillsName: 'Nodejs',
      fontAwesomeClassName: faNode
    },
    {
      skillsName: 'React Native',
      fontAwesomeClassName: faReact
    },
    {
      skillsName: 'aws',
      fontAwesomeClassName: faAws
    },
    {
      skillsName: 'PostgreSQL',
      fontAwesomeClassName: faDatabase
    },
    {
      skillsName: 'MongoDB',
      fontAwesomeClassName: faDatabase
    },
    {
      skillsName: 'Prisma',
      fontAwesomeClassName: faDatabase
    },
    {
      skillsName: 'docker',
      fontAwesomeClassName: faDocker
    }
  ],
  display: true
};

// stack progress

const techStack = {
  viewSkillsBar: true,
  experience: [
    {
      stack: 'Server-side (Backend)',
      progressPercentage: 90
    },
    {
      stack: 'Database',
      progressPercentage: 85
    },
    {
      stack: 'Client-side (Frontend/Design)',
      progressPercentage: 85
    }
  ]
};

// Professional Experience

const workExperience = {
  displayExperiences: true,
  experience: [
    {
      role: 'Full-stack Javascript  developer',
      company: 'Freelance',
      duration: 'September 2019–Present',
      roleDesc:
        'Developing full-stack web Apps with Node.js, TypeScript and React.js. Working with MongoDB, PostgreSQL, and GrapQL'
    },
    {
      role: 'Full-stack Javascript  developer',
      company: 'Freelyformd',
      duration: 'June 2018–October 2019',
      roleDesc:
        'I contributed to and developed full-stack React Native Apps. I gained great experience with Nodejs, Typescript, Reactjs and React Native. Worked with MongoDB and PostgreSQL'
    },
    {
      role: 'Software Developer, Intern',
      company: 'Afrosoft IT Solutions Ltd, Bombo Road – Kampala',
      duration: 'June 2017–August 2017',
      roleDesc:
        'Developed a full-stack Android mobile Application in JAVA and PHP. Developed RESTFUL APIs. Developed an embedded system Application. Developed a full web system, using WordPress content management system.'
    },
    {
      role: 'Software Engineer',
      company: 'National Agricultural Research Laboratories, NARL (Kawanda)',
      duration: 'July 2016–July 2017',
      roleDesc:
        'Software system developer JavaScript and PHP. System Analyst.Maintained database with MSSQL. IT consultant.'
    }
  ]
};

const educationInfo = {
  displaySchools: true, // change to false to hide academic background section
  schools: [
    {
      schoolName: 'Makerere University',
      duration: '2014 - 2019',
      achievement: 'Bachelor of Science in Software Engineering'
    },
    {
      schoolName: 'Seeta High School',
      duration: '2012 - 2013',
      achievement: 'Uganda Advanced Certificate of Education. Physics, Mathematics, Economics'
    }
  ]
};

const gitHubData = {
  showGitHubProfile: true, // set true or false to show GitHub user profile using GitHub, dafaults to true
  displayProjects: true
};

const openToWork = {
  isHireable: true // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subTitle: 'Discuss a project or just want to day hi? My inbox is open to all.',
  phone: '+256 787 656 528 | +256 706 732 405',
  email_address: 'eddiesmag@gmail.com'
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
  contactInfo
};
