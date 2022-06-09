import React from 'react';
import styled from 'styled-components';
import { projects } from '../projects-data';
import SingleProject from './SingleProject';

export const Projects = () => {
  return (
    <Wrapper className='section' id='projects'>
      <div className='section-center'>
        <h2>Projects</h2>
        <div className='underline'></div>
        <section className='projects-section'>
          {projects.map((project) => {
            return <SingleProject key={project.id} {...project} />;
          })}
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  h2 {
    text-align: center;
  }

  .projects-section {
    margin: 4rem 0;
  }

  article {
    margin-top: 5rem;
  }
`;

export default Projects;
