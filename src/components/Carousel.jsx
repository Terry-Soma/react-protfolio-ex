import React from "react";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact
} from "react-icons/fa";
export default function Carousel() {
  return (
    <div>
      <div className="carousel-parent position-relative" id="carousel">
        <h1 className="position-absolute top-0 start-0 end-0 text-center mt-5">
          Technologies I use
        </h1>

        <div className="gallery">
          <span style={{ "--i": 1 }}>
            <FaReact color="cyan" />
          </span>
          <span style={{ "--i": 2 }}>
            <FaHtml5 color="orange" />
          </span>
          <span style={{ "--i": 3 }}>
            <FaNodeJs color="green" />
          </span>
          <span style={{ "--i": 4 }}>
            <FaJsSquare color="yellow" />
          </span>
          <span style={{ "--i": 5 }}>
            <FaBootstrap color="purple" />
          </span>
          <span style={{ "--i": 6 }}>
            <FaCss3 color="blue" />
          </span>
        </div>
      </div>
    </div>
  );
}
