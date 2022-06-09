import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-header'>
        <ul className='nav-links'>
          <li className='nav-link'>
            <Link smooth to='/#projects'>
              Projects
            </Link>
          </li>
          <li className='nav-link'>
            <Link smooth to='/#about'>
              About
            </Link>
          </li>
          <li className='nav-link'>
            <Link smooth to='/#contact'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: white;

  a {
    color: white;
  }

  .nav-links {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .nav-link {
    padding: 0.5rem 1rem;
    display: inline-block;
    font-size: 1.2rem;
    transition: all 0.3s linear;
    cursor: pointer;
  }

  .nav-link:hover {
    color: #1904e5;
  }
`;

export default Navbar;
