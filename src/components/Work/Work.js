import React from 'react';
import './Work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Typical from 'react-typical';
import BeastMode from "../../img/porjects/beast.png";
import CodingQuiz from "../../img/porjects/coding.png";
import Weather from "../../img/porjects/weather.png";
import Employee from "../../img/porjects/employee.png";
import ReactEmpo from "../../img/porjects/ReactEmpo.png";



const Work = () => {
  return (
    <main id="work">
    <h1 className="lg-heading">
      My <span className="secondary-color">Work</span>
    </h1>
    <h2 className="sm-heading">
      Check out some of my projects...{' '}
      <Typical
        steps={[
          'Beast Mode!', 2000, 
          'Coding Quiz', 2000,
          'Weather Deshboard', 2000,
          'Template_Engine_Employee_Summary', 2000,
          'Employee Directory', 2000,
        
        ]}
        loop={Infinity}
        wrapper="span"
      />
    </h2>
    <div className="projects">
      <div className="item">
        <a target="_blank" href="http://point-of-s.herokuapp.com/" rel="noopener noreferrer">
          <img src={BeastMode} alt="Project" />
        </a>
        <a target="_blank" href="http://point-of-s.herokuapp.com/" className="btn-light" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEye} /> Project
        </a>
        <a target="_blank" href=" https://github.com/bruspdoee/point-of-sale.git" rel="noopener noreferrer" className="btn-dark">
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
      </div>
     
     {/* CodingQuiz */}
     
      <div className="item">
        <a target="_blank" href=" https://abiryusuf.github.io/CodingQuiz/" rel="noopener noreferrer">
          <img src={CodingQuiz} alt="Project" />
        </a>
        <a target="_blank" href=" https://abiryusuf.github.io/CodingQuiz/" className="btn-light" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEye} /> Project
        </a>
        <a target="_blank" href=" https://github.com/abiryusuf/CodingQuiz" className="btn-dark" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
      </div>
     
      {/* Weather */}
    
      <div className="item">
        <a target="_blank" href="https://abiryusuf.github.io/Weather_Deshboard/" rel="noopener noreferrer">
          <img src={Weather} alt="Project" />
        </a>
        <a target="_blank" href="https://abiryusuf.github.io/Weather_Deshboard/" className="btn-light" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEye} /> Project
        </a>
        <a target="_blank" href=" https://github.com/abiryusuf/Weather_Deshboard" className="btn-dark" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
      </div>
  
   {/* Employee */}
    
      <div className="item">
        <a target="_blank" href="https://abiryusuf.github.io/Template_Engine_Employee_Summary/" rel="noopener noreferrer">
          <img src={Employee} alt="Project" />
        </a>
        <a target="_blank" href="https://abiryusuf.github.io/Template_Engine_Employee_Summary/" className="btn-light" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEye} /> Project
        </a>
        <a target="_blank" href="https://github.com/abiryusuf/Template_Engine_Employee_Summary" className="btn-dark" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
      </div>
      

      <div className="item">
        <a target="_blank" href="https://employee-react-app.herokuapp.com/" rel="noopener noreferrer">
          <img src={ReactEmpo} alt="Project" />
        </a>
        <a target="_blank" href="https://employee-react-app.herokuapp.com/" className="btn-light" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEye} /> Project
        </a>
        <a target="_blank" href="https://github.com/abiryusuf/Employee_Directory_React" className="btn-dark" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
      </div>
     </div>
      
   
  </main>
  );
}

export default Work;