import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <h5>&copy;{new Date().getFullYear()} Jane Kavanagh</h5>
      <h5>All Rights Reserved</h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  color: white;
  background: transparent;
  width: 100%;

  h5 {
    text-align: center;
    margin: 0.1rem;
  }
`;

export default Footer;
