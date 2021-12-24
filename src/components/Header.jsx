import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const path = window.location.pathname;
  const toggleHeader = () => {
    setShowHeader(!showHeader);
  };

  return (
    <div className="header">
      {showHeader ? (
        <RiCloseFill
          onClick={toggleHeader}
          className="menu-icon position-fixed top-0 end-0"
        />
      ) : (
        <RiMenu3Fill
          onClick={toggleHeader}
          className="menu-icon position-fixed top-0 end-0"
        />
      )}

      <ul className={`${showHeader ? "show-header" : "hide-header"} n-box1 `}>
        <li className={`${path === "/" && "active"}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`${path === "/projects" && "active"}`}>
          <Link to="/projects">Projects</Link>
        </li>

        <li className={`${path === "/courses" && "active"}`}>
          <Link to="/courses">Courses</Link>
        </li>
        <li className={`${path === "/contact" && "active"}`}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
