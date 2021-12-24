import React from "react";
import Header from "../components/Header";
import projectData from "../data/project-data";
function Courses() {
  return (
    <div>
      <Header />
      <div
        className="courses-intro"
        style={{ backgroundImage: `url('./courses.svg')` }}
      >
        <div className="courses-intro__content">
          <div>
            <h1>Let's Learn</h1>
            <p>
              "I can't teach people everything they need to know. The best I can
              do is position them where they can find what they need to know
              when they need to know. "
            </p>
          </div>
          <button className="primary-button">
            <a href="#courses-list">Get Started</a>
          </button>
        </div>
      </div>

      <div className="why-me-parent">
        <div className="why-me n-box1 flex-with-center">
          <h1>why me ? </h1>
          <div className="why-me-content">
            <p>Simple</p>
            <p>I know how to kiss....</p>
            <p>No No No .. Not that kiss</p>
            <p>I know how to </p>
            <p>Keep it Straight, Simple </p>
          </div>
        </div>
      </div>

      <div className="container projects-list mb-5" id="courses-list">
        <h4 className="font-bold">Take a look my courses</h4>
        <hr />
        <div className="row my-5">
          {projectData.map((project) => {
            return (
              <div className="col-md-4 mt-5">
                <div className="position-relative project">
                  <img src={project.image} alt="Images" className="w-100" />
                  <div className="project-content w-100">
                    <h3>{project.title}</h3>
                    <hr />

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

export default Courses;
