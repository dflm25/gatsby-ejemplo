import React from "react";

import Logo from "../../assets/logo.png";
import Yo from "../../assets/yo.jpg";

export default function Header({ showBio = true }) {
  return (
    <header id="hero">
      <nav class="navbar">
        <div class="container">
          <h1 id="logo">
            <a href="/">
              <img src={Logo} alt="Your Logo" />
            </a>
          </h1>
          <ul class="nav-menu">
            <li>
              <a class="nav-link" href="#projects">
                PROJECTS
              </a>
            </li>
            <li>
              <a class="nav-link" href="#">
                CONTACT
              </a>
            </li>
            <li>
              <a class="nav-link" href="#">
                BlOG
              </a>
            </li>
            <li>
              <a
                class="nav-link btn btn-primary"
                href="https://github.com/CommunityPro/portfolio-html"
              >
                RESUME <i class="fas fa-arrow-right"></i>
              </a>
            </li>

            {/* <div class="theme-switch">
              <input type="checkbox" id="switch" />
              <label class="toggle-icons" for="switch">
                <img class="moon" src="assets/moon.svg" />
                <img class="sun" src="assets/sun.svg" />
              </label>
            </div> */}
          </ul>
          <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </div>
      </nav>

      {showBio && (
        <section class="header-container">
          <img class="profile-image" src={Yo} alt="" />
          <h1>Hi I'm Daniel Lucumi</h1>

          <div class="content-text">
            <h2>Building web and mobile apps</h2>

            <p>
              A Frontend and Backend developer experience in React, React
              native, Laravel and node.js
            </p>
          </div>
          <a
            href="https://github.com/dflm25"
            class="btn btn-secondary"
            target="_blank"
          >
            Connect With Me
          </a>
        </section>
      )}
    </header>
  );
}
