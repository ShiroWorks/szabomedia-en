

import emoji from 'react-easy-emoji';

const greeting = {
 
  username: 'Vilmos Szabo',
  title: 'Hi all, I\'m Vilmos',
  subTitle: emoji(
    'A passionate Full Stack Web Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Next.JS / Nodejs / PHP and some other cool libraries and frameworks.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/1vW3mwYJeGeMRoYSNv5XMW4dRykLfWS15/view?usp=sharing',
};



const socialMediaLinks = {
  github: 'https://github.com/ShiroWorks?tab=repositories',
  linkedin: 'https://www.linkedin.com/in/vilmos-szab%C3%B3-4b4b74201/',
  gmail: 'vili8899s@gmail.com',
  twitter: 'https://twitter.com/___Vili___',
  codepen: 'https://codepen.io/Shirox',
};



const skillsSection = {
  title: 'What I do',
  subTitle:
    'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
    ),
    emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
    emoji(
      '⚡ Integration of third party services like Firebase'
    ),
    emoji('⚡ Integration of E-commerce platforms, payment gateways, custom product templates, and more'
    ),
    emoji('⚡ Looking to improve your page performance, SEO, or user experience? Request a free site audit '
    ),
  ],

 

  softwareSkills: [
    {
      skillName: 'HTML-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'CSS3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'Sass',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'ReactJS',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'NodeJS',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'PHP',
      fontAwesomeClassname: 'fab fa-php',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'Laravel',
      fontAwesomeClassname: 'fab fa-laravel',
    },
    {
      skillName: 'Firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'MongoDB',
      fontAwesomeClassname: 'icon-mongodb',
    },
    {
      skillName: 'Docker',
      fontAwesomeClassname: 'icon-docker',
    },
    {
      skillName: 'Wordpress',
      fontAwesomeClassname: 'icon-wordpress',
    }
   
  ],
};



const educationInfo = {
  viewEducation: false, 
  schools: [
    {
      schoolName: '',
      logo: '',
      subHeader: '',
      duration: '',
      desc: '',
      descBullets: [
        '',
        '',
      ],
    },
    {
      schoolName: '',
      logo: '',
      subHeader: '',
      duration: '',
      desc:
        '',
      descBullets: [''],
    },
  ],
};



const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: 'Frontend/Design', 
      progressPercentage: '90%', 
    },
    {
      Stack: 'Backend',
      progressPercentage: '75%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '70%',
    },
  ],
};



const workExperiences = {
  viewExperiences: false, 
  experience: [
    {
      role: '',
      company: '',
      companylogo: '',
      date: '',
      desc:
        '',
      descBullets: [
        '',
        '',
      ],
    },
    {
      role: '',
      company: '',
      companylogo: '',
      date: '',
      desc:
        '',
    },
    {
      role: '',
      company: '',
      companylogo: '',
      date: '',
      desc:
        '',
    },
  ],
};


const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'ShiroWorks', 
  showGithubProfile: 'true', 
};



// const bigProjects = {
//   title: 'My Works',
//   subtitle: 'A SELECTION OF MY RANGE OF WORK',
//   projects: [
//     {
//       image: require('./assets/images/shiroworks1.jpg'),
//       link: 'https://shiroworks-en.netlify.app/',
//     },
//     {
//       image: require('./assets/images/oceanblue.jpg'),
//       link: 'https://oceanbluecss.netlify.app/index.html',
//     },
//     {
//       image: require('./assets/images/tasty.jpg'),
//       link: 'https://tasty-foodcss.netlify.app/',
//     },
//     {
//       image: require('./assets/images/covidtracker.jpg'),
//       link: 'https://covid-tracker-reactjs.netlify.app/',
//     },
//     {
//       image: require('./assets/images/airbnb.jpg'),
//       link: 'https://react-airbnbjs.netlify.app/',
//     },
//     {
//       image: require('./assets/images/powerroom.jpg'),
//       link: 'https://the-power-room.netlify.app/',
//     },
//     {
//       image: require('./assets/images/movies.jpg'),
//       link: 'https://popular-movies-movie-db.netlify.app/',
//     },
//     {
//       image: require('./assets/images/githubjobs.jpg'),
//       link: 'https://github-api-job-search.netlify.app/',
//     },
//     {
//       image: require('./assets/images/readit.jpg'),
//       link: 'https://github.com/ShiroWorks/Readit-Backend',
//     },
//   ],
// };
const bigProjects = {
  title: "My Works",
  subtitle: "A SELECTION OF MY RANGE OF WORK",
  projects: [
    {
      image: require("./assets/images/reactLandingPage.gif"),
      projectName: "Dolla",
      projectDesc: "React Landing Page with Smooth Scroll",
      footerLink: [
        {
          name: "View Website",
          url: "https://react-landing-page-smooth-scroll.netlify.app/"
        }
        
      ]
    },
    {
      image: require("./assets/images/oceanblue.jpg"),
      projectName: "OceanBlue",
      projectDesc: "Responsive website",
      footerLink: [
        {
          name: "View Website",
          url: "https://oceanbluecss.netlify.app/index.html"
        }
      ]
    },
    {
      image: require("./assets/images/movies.jpg"),
      projectName: "React Movies",
      projectDesc: "Most popular movies, with search function",
      footerLink: [
        {
          name: "View Website",
          url: "https://popular-movies-movie-db.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/tasty.jpg"),
      projectName: "Tasty Food",
      projectDesc: "Responsive website with light / dark mode",
      footerLink: [
        {
          name: "View Website",
          url: "https://tasty-foodcss.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/restaurantLandingPage.png"),
      projectName: "Restaurant Landing Page",
      projectDesc: "A simple landing page for a restaurant",
      footerLink: [
        {
          name: "View Website",
          url: "https://react-restaurant-landing-page.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/appshow.jpg"),
      projectName: "Appnu",
      projectDesc: "Application showcase website (Landing Page)",
      footerLink: [
        {
          name: "View Website",
          url: "https://dev-applandingpage.pantheonsite.io/"
        }
      ]
    },
    {
      image: require("./assets/images/reactDashboard.png"),
      projectName: "Admin Dashboard",
      projectDesc: "React Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban and More",
      footerLink: [
        {
          name: "View Website",
          url: "https://react-admin-dashboard-app.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/pacman.jpg"),
      projectName: "Pac-Man",
      projectDesc: "Pac-Man game",
      footerLink: [
        {
          name: "View Website",
          url: "https://pacman-js-sound.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/fitnessapp.png"),
      projectName: "Fitness App",
      projectDesc: "React Fitness Application",
      footerLink: [
        {
          name: "View Website",
          url: "https://react-mui-fitness-app.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/gallery.jpg"),
      projectName: "Gallery",
      projectDesc: "Gallery with the help of pixabay API",
      footerLink: [
        {
          name: "View Website",
          url: "https://react-pixabay-gallery.netlify.app/"
        }
      ]
    },
  ],
  display: true 
};




const achievementSection = {
  title: emoji('My Favorite Books 📚 '),
  subtitle:
    'A few of my favorite books',

  achievementsCards: [
    {
      title: 'Eloquent JavaScript',
      subtitle:
        '',
      image: require('./assets/images/jsbook1.jpg'),
      footerLink: [
        {
          name: 'Online Edition',
          url:
            'https://eloquentjavascript.net/',
        }
        
      ],
    },
    {
      title: 'PHP The Right Way',
      subtitle:
        '',
      image: require('./assets/images/php.jpg'),
      footerLink: [
        {
          name: 'Online Edition',
          url:
            'https://phptherightway.com/',
        },
      ],
    },

    {
      title: 'Code Complete: A Practical Handbook of Software Construction',
      subtitle: '',
      image: require('./assets/images/ydkjs.jpg'),
      footerLink: [
        { name: 'Amazon', url: 'https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670/ref=pd_sbs_1?pd_rd_w=wHdci&pf_rd_p=3ec6a47e-bf65-49f8-80f7-0d7c7c7ce2ca&pf_rd_r=6K8TVCVW71RVC6R3BGRJ&pd_rd_r=22b59947-fda8-4f42-9fdc-7ed84e381854&pd_rd_wg=OMvuf&pd_rd_i=0735619670&psc=1' },
      
      ],
    },
  ],
};



const blogSection = {
  title: 'Blog',
  subtitle:
    'WITH LOVE FOR DEVELOPING COOL STUFF, I LOVE TO WRITE AND TEACH OTHERS WHAT I HAVE LEARNT (the blog is in hungarian)',

  blogs: [
    {
      url:
        'https://www.szabovilmos.hu/cikkek/hogyan-rakd-ossze-a-sajat-mernokinformatikai-vegzettseged-online-ingyert',
      title: 'Hogyan rakd össze a saját mérnökinformatikai végzettséged online, ingyért',
      description:
        'Manapság egyre több cégnél, amik fejlesztéssel foglalkoznak nem elvárás a jelentkezésnél, hogy legyen végzettséged. Már nagyobb cégekhez is, mint például a Google jelentkezhetsz végzettség nélkül. Ettől függetlenül, fel kell tudnod mutatnod, hogy eddig milyen applikációkat vagy weboldalakat készítettél, és be kell tudnod bizonyítanod, hogy tudásban sem vagy rosszabb annál mint aki egyetemen végzett.',
    },
    {
      url: 'https://www.szabovilmos.hu/cikkek/css4',
      title: 'CSS4',
      description:
        'Mostanában találkoztam egy bejegyzéssel Peter-Paul Koch blogján, aminek a címe CSS4 is here!. Néha azt látom, hogy az emberek időről időre a CSS4-t használják, hogy kattintásokat szerezzenek, és ez kicsit bosszant engem, szóval általában nem törődök velük, de valamiért úgy döntöttem, hogy erre a cikkre rákattintok és megnézem, hogy miről szól.',
    },
  ],
};


const talkSection = {
  viewTalkSection: false,
  title: '',
  subtitle: ''
  ,

  talks: [
    {
      title: '',
      subtitle: '',
      slides_url: '',
      event_url: '',
    },
  ],
};



const podcastSection = {
  viewPodcastSection:false,
  title: '',
  subtitle: '',

  
  podcast: [
    '',
  ],
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL',
  number: '',
  email_address: 'vili8899s@gmail.com',
};



const twitterDetails = {
  userName: '___Vili___',
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
