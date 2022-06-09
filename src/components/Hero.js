import React from 'react';
import styled from 'styled-components';
import heroLogo from '../images/hero-logo.png';

export const Hero = () => {
  return (
    <Wrapper>
      <div className='hero-img'>
        <img src={heroLogo} alt='jane kavanagh web developer' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 60vh;
  background-color: #fab2ff;
  background-image: linear-gradient(to bottom right, #fab2ff, #1904e5);
  display: flex;
  justify-content: center;
  align-items: center;

  .hero-img {
    width: 500px;
    margin-top: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    object-fit: contain;
  }
`;

export default Hero;
