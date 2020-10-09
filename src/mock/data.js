import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Wenhe Qi | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "This is Wenhe Qi's personal website.", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Wenhe Qi',
  subtitle: "I'm a Full-Stack developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'dog.png',
  paragraphOne:
    'I’m Wenhe Qi. I’ve been working as a modem protocol software engineer at HTC for 5 years. During that time, I have had the opportunity to implement a novel approach that improved the recovery time from Out Of Service (OOS) by 30% and led several projects, including one flagship model, HTC U11.',
  paragraphTwo:
    'I started a new chapter as an MSCS student at University of Southern California (USC) in January 2019. I’m currently carrying my knowledge and experience of communication network into web technologies and exploring the new world of full stack development.',
  paragraphThree:
    'In my free time, I enjoy volunteering, working on a couple of personal projects and writing stuff I learnt. You can catch me playing games (Just Dance, PUBG, etc.) sometimes.',
  resume:
    'https://docs.google.com/document/d/e/2PACX-1vTRt1-TiuIZaD2GU56S32dqxL7C9NLFD52CqEUtGkxPOVKpwsoLlYoB71w_RAWaMbkonQo1MnU1AzSz/pub', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'yamdb.png',
    title: 'YamDB',
    info:
      'YamDB (Yet Another Movie Database) is a simple yet powerful movie API which offers users plot, poster, etc. for over 1.2 million movies in JSON format.',
    info2:
      'Distributed crawling system is designed to ensure the freshness of all movie data on a daily basis.',
    url: 'https://yamdbapi.com/', // if no url, the button will not show up
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'netcinema.png',
    title: 'NetCinema',
    info:
      'NetCinema is a React based movie review application in which user can explore movies, TV shows in different categories, e.g. genre, cast and write reviews after logging in.',
    info2: '',
    url: 'https://netcinema.herokuapp.com/', // if no url, the button will not show up
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'darksky.png',
    title: 'Dark Sky',
    info:
      'Dark Sky is an Android weather appliication, which allows users to search for weather summaries/ detailed information, pin cities to favorites, share on Twitter and more.',
    info2: '',
    url: '', // if no url, the button will not show up
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '', // call to action text for the contact section
  btn: "Let's connect", // text inside the button
  email: 'wenhe.qi@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/wenheqi',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/wenheqi',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/wenheqi/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/wenheqi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
