import React from 'react';
import styled from 'styled-components';
import contactlogo from '../images/contact-logo.png';
import { SiLinkedin, SiGithub } from 'react-icons/si';

const Contact = () => {
  return (
    <Wrapper className='section' id='contact'>
      <h2>Get in Touch</h2>
      <div className='section-center'>
        <div className='form-container'>
          <form
            className='contact-form'
            action='https://formspree.io/f/mwkyzobw'
            method='POST'
          >
            <input
              type='text'
              className='form-input'
              placeholder='Name'
              name='name'
              required
            />
            <input
              type='email'
              className='form-input'
              placeholder='Email'
              name='email'
              required
            />

            <textarea
              id='message'
              name='message'
              type='textarea'
              defaultValue='Enter your message'
              className='form-input textarea'
              required
            ></textarea>
            <button className='submit-btn' type='submit'>
              submit
            </button>
          </form>
          <div className='contact-info'>
            <img
              src={contactlogo}
              className='contact-logo'
              alt='jane kavanagh logo'
            />
            <div className='social-icons'>
              <a
                href='https://www.linkedin.com/in/jane-kavanagh'
                target='_blank'
                rel='noreferrer'
              >
                <SiLinkedin />
              </a>
              <a
                href='https://github.com/JaneTrish'
                target='_blank'
                rel='noreferrer'
              >
                <SiGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 0;
  margin-top: 5rem;
  height: 40%;
  background-color: #fab2ff;
  background-image: linear-gradient(to bottom right, #fab2ff, #1904e5);

  h2 {
    padding-top: 3rem;
    color: white;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
  }

  .form-container {
    display: flex;
    flex-wrap: wrap;
    margin: 4rem auto;
    padding: 0 1rem;
    justify-content: space-evenly;
  }

  .contact-form {
    margin: 1rem 0;
    max-width: 700px;
    margin-bottom: 3rem;
  }

  .form-input {
    font-family: 'Mulish', sans-serif;
    width: 100%;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    margin: 0.5rem 0;
    height: 40px;
    background: transparent;
    color: white;
  }

  .form-input::placeholder {
    font-family: 'Mulish', sans-serif;
    top: 0;
    color: white;
  }

  .textarea {
    height: 100px;
    font-family: 'Mulish', sans-serif;
    resize: none;
  }

  .submit-btn {
    font-family: 'Mulish', sans-serif;
    display: block;
    margin: 1rem auto;
    width: 5rem;
    height: 40px;
    border: none;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.5rem 0;
    background: #white;
    color: #bb31f7;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s linear;
  }

  .submit-btn:hover {
    color: #1904e5;
  }

  .contact-info {
    width: 300px;
  }

  .contact-logo {
    width: 250px;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  .social-icons {
    display: flex;
    justify-content: center;
  }
  .social-icons svg {
    color: white;
    display: block;
    font-size: 1.5rem;
    margin: 0 0.75rem;
    transition: 0.2s all linear;
  }
`;

export default Contact;
