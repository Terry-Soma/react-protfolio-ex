import React from "react";
import Header from "../components/Header";
import { FaLaptopCode } from "react-icons/fa";
import projectData from "../data/project-data";
function Projects() {
  return (
    <div>
      <Header />
      <div className="container project-intro">
        <div className="row flex-with-center mt-5">
          <div className="col-md-6 n-box2 px-4 py-5" data-aos="fade-down">
            <div>
              <h1 className="font-bold">Projects</h1>
              <p className="font-bold">
                Good ideas are not adopted automatically. They must be driven
                into practice with courageous patience
              </p>
              <button className="primary-button">
                <a href="#projects-list" style={{ color: "white" }}>
                  Get Started
                </a>
              </button>
            </div>
          </div>
          <div className="col-md-6 position-relative  ">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#0F62FE"
                d="M36,-46.4C45.9,-34.6,52.6,-22.5,56.9,-8.5C61.2,5.5,63,21.4,57.9,36.5C52.9,51.6,41,65.9,26.5,70C11.9,74.2,-5.4,68.2,-20.9,61C-36.3,53.8,-50,45.3,-56.1,33.2C-62.3,21,-60.8,5.3,-56,-7.8C-51.2,-20.8,-43,-31.1,-33.1,-43C-23.2,-54.8,-11.6,-68.2,0.7,-69C13,-69.9,26.1,-58.2,36,-46.4Z"
                transform="translate(100 100)"
              />
            </svg>
            <FaLaptopCode
              color="white"
              size="128"
              className="position-absolute top-50 start-50 translate-middle"
            />
          </div>
        </div>
      </div>

      <div className="container projects-list" id="projects-list">
        <h4 className="font-bold">Look my lists</h4>
        <hr />
        {console.log(projectData)}
        <div className="row my-5">
          {projectData.map((project) => {
            return (
              <div className="col-md-4">
                <div className="position-relative project">
                  <img src={project.image} alt="Images" />
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <hr />
                    <p>{project.description}</p>
                    <button className="primary-button">Demo </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
