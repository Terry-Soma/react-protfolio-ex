import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaMailBulk,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className="footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001220"
            fill-opacity="1"
            d="M0,64L60,85.3C120,107,240,149,360,176C480,203,600,213,720,186.7C840,160,960,96,1080,69.3C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>

        <div className="row justify-content-center footer-content">
          <div className="col-md-6">
            <div>
              <p>Designed and Developed By </p>
              <hr />

              <div className="d-flex justify-content-between px-2">
                <FaInstagram className="footer-icons" />
                <FaFacebook className="footer-icons" />
                <FaMailBulk className="footer-icons" />
                <FaLinkedin className="footer-icons" />
                <FaGithub className="footer-icons" />
              </div>
              <hr />
              <br />
              <p>SathyaPrakashReddy</p>
              <p>Номч Эр</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
