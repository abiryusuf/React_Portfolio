import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import abir from '../../img/profile.jpg';

const About = () => {
  return (
    <main id="about">
      <h1 className="lg-heading">
        About <span className="secondary-color">Me</span>
      </h1>
      <h2 className="sm-heading">
        Let me introduce...
      </h2>
      <div className="about-info">
      <img src={abir} alt="John Doe" className="bio-image" />

      <div className="bio">
        <p>
                I love solving problems and making other people laugh. My hobbies are reading, watching movies, and playing cricket. I've also recently picked up coding bootcamp at Columbia University and Programming Hero that have been super fun. It's refreshing to pick up something and feel like I'm making large steps up in quality and complexity. 
        
        I greatly enjoy pushing myself and the thrill of solving problems is intoxicating. 
        
        Group work is one of my favorite things. Having someone to bounce ideas off of is extremely helpful. Being flexible on work is also very nice, solving problems as they show up is also something that I enjoy.
        </p>
      </div>

      <div className="job job-1">
        <h3>Skills</h3>
        <p>
          • <strong>Programming :</strong> Javascript, ES6, React, Redux, Python, Java <br />
          • <strong>Databases :</strong> MongoDB, MySQL, Sequelize <br />
          • <strong>Tools :</strong> Git, Webpack, VSCode, Chrome Dev Tool, Rally, Postman, Jira, Jenkins<br />
          • <strong>OS :</strong> Windows, Linux. iOS
        </p>
      </div>

      <div className="job job-2">
        <h3>Personal Info</h3>
        <p>
          <strong>Name</strong>          :   Abir Yusuf <br />
          <strong>Blood Group</strong>   :   B+<br />
          <strong>Email</strong>         :  abiryusuf5225@gmail.com<br />
          <strong>Living</strong>        : New York
        </p>
      </div>

      <section className="job job-3">
        <h3>Education</h3>
        <p>
          <strong>Web Development</strong><br />
          <strong>Institute:</strong>   Columbia University <br />
          <strong>Expected Graduation:</strong>     July, 2020
        </p>
        <p>
          <strong>Bachelor Of Science</strong><br />
          <strong>Institute:</strong>   Monroe College<br />
          <strong>Subject:</strong>     Computer Information System(CIS)
        </p>
        <p>
          <strong>Associate of Business Admistration</strong><br />
          <strong>Institute:</strong>   LaGuardia Community College<br />
          <strong>Subject:</strong>     BBA
        </p>
      </section>
    </div>
    <div className="cv">
      <Link target="_blank" to="https://docs.google.com/document/d/1ERZcDV7VYKoAAFdKhOaDO2UxIPM8e_a7/edit#" className="glow-on-hover">Download Resume</Link>
    </div>
    

    </main>
  );
};

export default About;