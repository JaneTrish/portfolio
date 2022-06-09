import React from 'react';
import styled from 'styled-components';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiStyledcomponents,
  SiReact,
  SiNodedotjs,
  SiGithub,
} from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const SingleProject = ({
  image,
  title,
  alt,
  description,
  website,
  github,
  stack,
}) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <div className='project-container'>
        <div className='img-container'>
          <img src={image} alt={alt} />
        </div>
        <div className='description-container'>
          <p>{description}</p>
          <p className='link'>
            <a href={website} target='_blank' rel='noreferrer'>
              <FaExternalLinkAlt />
              Check out <span>{title}</span> website
            </a>
          </p>
          <p className='link'>
            <a href={github} target='_blank' rel='noreferrer'>
              <SiGithub /> Visit a GitHub repository to learn more about the
              project
            </a>
          </p>
          <h5>Stack</h5>
          <ul>
            {stack.map((link, index) => {
              if (link === 'React') {
                return (
                  <li key={index}>
                    <SiReact className='react' /> {link}
                  </li>
                );
              }
              if (link === 'Node/Express.js') {
                return (
                  <li key={index}>
                    <SiNodedotjs className='node' /> {link}
                  </li>
                );
              }
              if (link === 'PostgreSQL') {
                return (
                  <li key={index}>
                    <SiPostgresql className='postgres' /> {link}
                  </li>
                );
              }
              if (link === 'Styled-components') {
                return (
                  <li key={index}>
                    <SiStyledcomponents />
                    {link}
                  </li>
                );
              }
              if (link === 'JavaScript') {
                return (
                  <li key={index}>
                    <SiJavascript className='js' /> {link}
                  </li>
                );
              }
              if (link === 'HTML5') {
                return (
                  <li key={index}>
                    <SiHtml5 className='html' /> {link}
                  </li>
                );
              }
              if (link === 'CSS3') {
                return (
                  <li key={index}>
                    <SiCss3 className='css' /> {link}
                  </li>
                );
              }
              return link;
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .project-container {
    display: flex;
    padding: 0 2rem;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .description-container {
    margin: 2rem 0;
    width: 730px;
    align-self: center;
  }

  .img-container {
    width: 500px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 2rem auto;
    object-fit: contain;
    border-radius: 5px;
  }

  h3 {
    text-align: center;
    font-size: 1.75rem;
  }

  h5 {
    margin-top: 2rem;
  }

  h5,
  p,
  li {
    font-size: 1.2rem;
  }

  a {
    color: black;
    transition: 0.3s all linear;
  }

  a:hover {
    color: #bb31f7;
  }

  .link {
    margin: 0;
    padding: 0;
  }

  .link span {
    font-weight: 700;
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

export default SingleProject;
