import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Typical from 'react-typical';

const Home = () => {
  return (
    <main id="home">
    <h1 className="lg-heading">
      Abir
      <span className="secondary-color"> Yusuf</span>
    </h1>
    <h2 className="sm-heading">
      Hi, I am {' '}
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
      {/* <a target="_blank" href="abiryusu5225@gmail.com">
        <FontAwesomeIcon icon={faGmail} size="2x" />
      </a> */}
      <a target="_blank" href="https://www.linkedin.com/feed/">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a target="_blank" href="https://github.com/">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  </main>
  );
}

export default Home;