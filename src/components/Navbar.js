import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div>
      <nav>
        <h2>Matthew Turner</h2>
        <ul>
          <li>
            <Link
              className="navbar-links section-links"
              to="my-projects-section"
              smooth={true}
            >
              My Projects
            </Link>
          </li>
          <li>
            <Link
              className="navbar-links section-links"
              to="about-me-section"
              smooth={true}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              className="navbar-links section-links"
              to="contact-me-section"
              smooth={true}
            >
              Contact Me
            </Link>
          </li>
          <li>
            <a
              className="navbar-links"
              href="https://github.com/Mjturn"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="navbar-links"
              href="https://www.linkedin.com/in/matthew-turner-482164220/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="navbar-links"
              href="https://www.fiverr.com/mjturn?up_rollout=true"
              target="_blank"
            >
              Fiverr
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
