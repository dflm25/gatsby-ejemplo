import React from "react";

import Linkedin from "../../assets/linkedin-icon.svg";
import GitHub from "../../assets/github-icon.svg";

export default function Footer() {
  return (
    <footer id="footer">
      <div class="container">
        <a href="mailto:dflm25@gmail.com">dflm25@gmail.com</a>
        <div class="social">
          <a href="#" target="_blank">
            <img src={Linkedin} alt="Linkedin" />
          </a>
          <a href="#" target="_blank">
            <img src={GitHub} alt="GitHub" />
          </a>
        </div>

        <div class="attribution">
          <a
            href="https://github.com/CommunityPro/portfolio-html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://user-images.githubusercontent.com/62628408/157202263-9174da24-b19a-4017-9b7c-a1d26ae8f014.svg"
              alt="attribution"
              width="150px"
            />
          </a>
        </div>
        <p>
          Copyright &copy; dlucumi.dev <span id="datee"></span>, All rights
          reserved
        </p>
      </div>
    </footer>
  );
}
