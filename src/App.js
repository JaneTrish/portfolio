import React from 'react';
import { HashRouter } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter>
      <NavContainer className='nav-container'>
        <Navbar />
        <Hero />
      </NavContainer>
      <Projects />
      <About />
      <FooterContainer className='footer-container'>
        <Contact />
        <Footer />
      </FooterContainer>
    </HashRouter>
  );
}

const NavContainer = styled.div`
  position: relative;
`;
const FooterContainer = styled.div`
  position: relative;
`;

export default App;
