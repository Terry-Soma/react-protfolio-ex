import React from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      {/* intro */}
      <div
        className="introduction flex-with-center"
        style={{ backgroundImage: `url("./home.svg")` }}
      >
        <div>
          <h1 data-aos="fade-up">Terry-Soma</h1>

          <div className="intro-content d-flex justify-content-between">
            <p>
              Full Stack <br /> Developer | Some Day{" "}
            </p>
            <button className="primary-button font-bold ">
              <a href="#carousel">Let's Start</a>
            </button>
          </div>
        </div>
      </div>

      <Carousel />
      {/* wave */}
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001220"
            fillOpacity="1"
            d="M0,128L34.3,128C68.6,128,137,128,206,138.7C274.3,149,343,171,411,165.3C480,160,549,128,617,112C685.7,96,754,96,823,112C891.4,128,960,160,1029,165.3C1097.1,171,1166,149,1234,144C1302.9,139,1371,149,1406,154.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* js */}
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-4">
            <div className="n-box2 px-3 py-4 font-bold" data-aos="fade-right">
              <h1>I will come back soon</h1>
              <br />
              <p>Some day i will become Javascript Dev</p>
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-center">
          <div className="col-md-4">
            <div>
              <img
                src="./home-js.svg"
                alt="js section img"
                height="200"
                className="w-100"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className="n-box2 px-3 py-5 font-bold" data-aos="fade-left">
              <p>
                Javascript is one of the most top-ranked programming language
                because of it's ubiquitous use on all platforms and mass
                adaption. Main use cases: Web Deleopment{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* my skill */}
      <div className="container my-5 n-box2 py-5 dev-stack">
        <div className="text-center">
          <h3 className="font-bold text-center">My skill </h3>
          <hr />
          <img
            src="./developer.svg"
            alt="dev"
            height="200"
            className="text-center backround-transparent"
          />
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="font-bold">
              <h3>Front-End</h3>
              <hr />
              <p>HTML/CSS</p>
              <p>Javascript</p>
              <p>React</p>
              <p>Next</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="font-bold text-center">
              <h3>UI/Styling</h3>
              <hr />
              <p>Bulma CSS</p>
              <p>Bootstrap</p>
              <p>Semantic UI</p>
              <p></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="font-bold text-end">
              <h3>Backend / DB</h3>
              <hr />
              <p>Node JS</p>
              <p>Express</p>
              <p>PHP</p>
              <p>SQL</p>
              <p>MongoDB</p>
            </div>
          </div>
        </div>
      </div>

      {/* blob */}
      <div>
        <h3 className="text-center font-bold">Who am I ? </h3>
        <div
          className="who flex-with-center"
          style={{
            backgroundImage: `url('./who.svg')`,
            backgroundColor: "cornflowerblue"
          }}
        >
          <div>
            <h3>Hi, i am Terry</h3>
            <hr />
            <p>
              {" "}
              <pre>
                {JSON.stringify(
                  {
                    name: "Terry Soma",
                    from: "MN",
                    age: "GonDra",
                    gender: "Some"
                  },
                  null,
                  2
                )}
              </pre>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
