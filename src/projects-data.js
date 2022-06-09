import beautyStore from './images/beauty-store.jpg';
import miniReddit from './images/mini-reddit.jpg';
import toDo from './images/to-do.jpg';
import mixedMessages from './images/mixed-messages.jpg';
import tennis from './images/tennis.jpg';
import teaCozy from './images/tea-cozy.jpg';

export const projects = [
  {
    id: 1,
    image: beautyStore,
    title: 'Beauty Store',
    alt: 'flowers on the table',
    description:
      'A Full Stack eCommerce App (PERN) for selling beauty products. This project has it all: a relational database, RESTful API and a simple but elegant UI.',
    website: 'https://beaty-store.herokuapp.com/',
    github: 'https://github.com/JaneTrish/beauty-store-full-stack',
    stack: ['React', 'Node/Express.js', 'PostgreSQL', 'Styled-components'],
  },
  {
    id: 2,
    image: miniReddit,
    title: 'Mini Reddit',
    alt: 'reddit logo on a screen',
    description:
      'A Reddit client that offers just as much as you need to get entertained during a short lunch break or before going to bed. Light / dark mode is available.',
    website: 'https://my-mini-reddit.netlify.app/',
    github: 'https://github.com/JaneTrish/reddit_client',
    stack: ['React', 'CSS3'],
  },
  {
    id: 3,
    image: toDo,
    title: 'To-Do',
    alt: 'open planner next to a laptop',
    description:
      'A plain JavaScript to-do app that will help you stay organized.',
    website: 'https://janetrish.github.io/to-do/',
    github: 'https://github.com/JaneTrish/to-do',
    stack: ['JavaScript', 'CSS3', 'HTML5'],
  },
  {
    id: 4,
    image: mixedMessages,
    title: 'Horoscope generator',
    alt: 'moon',
    description:
      'A JavaScript app that shows random astrological messages with tips for the day.',
    website: 'https://janetrish.github.io/mixed-messages/',
    github: 'https://github.com/JaneTrish/mixed-messages',
    stack: ['JavaScript', 'CSS3', 'HTML5'],
  },
  {
    id: 5,
    image: tennis,
    title: 'Atlantic Tennis Club',
    alt: 'tennis ball',
    description:
      'A static website with responsive design for a local tennis club.',
    website: 'https://janetrish.github.io/tennis-club/',
    github: 'https://github.com/JaneTrish/tennis-club',
    stack: ['CSS3', 'HTML5'],
  },
  {
    id: 6,
    image: teaCozy,
    title: 'Tea Cozy',
    alt: 'cup of tea',
    description:
      'Another static website with responsive design, this time for a local tea shop.',
    website: 'https://janetrish.github.io/tea-cozy/',
    github: 'https://github.com/JaneTrish/tea-cozy',
    stack: ['CSS3', 'HTML5'],
  },
];
