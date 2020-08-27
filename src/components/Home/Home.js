import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Typical from 'react-typical';

const Home = () => {
  return (
    <main id="home">
    <h1 className="lg-heading">
      Hi, I am
      <span className="secondary-color"> Abir</span>
    </h1>
    <h2 className="sm-heading">
       I'm {' '}
      <Typical
        steps={[
          'A Web Developer', 2000, 
          'A Programmer', 2000,
          'A Designer', 2000,
          'An QA', 2000,
        ]}
        loop={Infinity}
        wrapper="span"
      />
    </h2>
    <div className="icons">
      <a target="_blank" href="https://www.linkedin.com/in/abir-yusuf/" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a target="_blank" href="https://github.com/" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  </main>
  );
}

export default Home;