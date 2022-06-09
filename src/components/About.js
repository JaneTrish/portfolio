import React from 'react';
import styled from 'styled-components';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiReact,
  SiNodedotjs,
} from 'react-icons/si';

export const About = () => {
  return (
    <Wrapper id='about'>
      <div className='section-center'>
        <h2>About</h2>
        <div className='underline'></div>
        <article className='intro'>
          <div className='bio'>
            <p>
              My name is Jane and I am a Career Switcher. I discovered my
              interested for web development in 2020 during the lockdown. It all
              started with an HTML tutorial. Since then I went a long way from
              reading about static websites to building my first Full-Stack App.
            </p>
            <p>
              I like learning new things, solving problems and creating projects
              from scratch. In my free time I prefer hiking or reading about the
              universe
              <span> 💫</span>
            </p>
          </div>
          <div className='skills'>
            <h4>Skills</h4>
            <p>
              In April 2022 I got certified as a Full-Stack Developer by
              Codecademy. I work with:
            </p>
            <ul>
              <li>
                <SiHtml5 className='html' />
                HTML5
              </li>
              <li>
                <SiCss3 className='css' />
                CSS3
              </li>
              <li>
                <SiJavascript className='js' />
                JavaScript and jQuery
              </li>
              <li>
                <SiReact className='react' />
                React, Redux and styled-components
              </li>
              <li>
                <SiNodedotjs className='node' />
                Node/Express.js
              </li>
              <li>
                <SiPostgresql />
                PostgreSQL
              </li>
            </ul>
            <p>
              I am also familiar with concepts of{' '}
              <span>Test Driven Development</span> and <span>Web Security</span>{' '}
              fundamentals. For my projects I use{' '}
              <span>Visual Studio Code</span> and <span>git</span> version
              control.
            </p>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h2,
  h4 {
    text-align: center;
  }

  p,
  li {
    font-size: 1.2rem;
  }

  ul {
    padding-left: 1rem;
    margin: 1rem auto;
    font-weight: 600;
  }

  .intro {
    max-width: 750px;
    margin: 3rem auto;
    text-align: justify;
    padding: 0 1rem;
  }

  .skills {
    margin-top: 3rem;
  }

  .skills span {
    font-weight: 600;
  }

  svg {
    margin-right: 0.5rem;
  }

  .react {
    color: #61dbfb;
  }
  .node {
    color: #3c873a;
  }
  .js {
    color: #f0db4f;
  }
  .html {
    color: #e34c26;
  }
  .css {
    color: #264de4;
  }
`;

export default About;
