import * as React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <>
      <Header />
      <section id="projects" class="project-container container">
        <div class="division"></div>
        <div class="content-text">
          <h2>Projects</h2>
          <p>Check out some of my personal and paid projects</p>
        </div>

        <article class="project">
          <div href="" class="card">
            <div class="project-info">
              <div class="project-bio">
                <h3>Project One</h3>
                <p>React, Redux, SASS</p>
              </div>

              <div class="project-link">
                <a href="#" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
                <a href="#" target="_blank">
                  <i class="fas fa-globe"></i>
                </a>
              </div>
            </div>
          </div>

          <div href="" class="card">
            <div class="project-info">
              <div class="project-bio">
                <h3>Project Two</h3>
                <p>React, Redux, SASS</p>
              </div>

              <div class="project-link">
                <a href="#" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
                <a href="#" target="_blank">
                  <i class="fas fa-globe"></i>
                </a>
              </div>
            </div>
          </div>

          <div href="" class="card">
            <div class="project-info">
              <div class="project-bio">
                <h3>Project Three</h3>
                <p>React, Redux, SASS</p>
              </div>

              <div class="project-link">
                <a href="#" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
                <a href="#" target="_blank">
                  <i class="fas fa-globe"></i>
                </a>
              </div>
            </div>
          </div>

          <div href="" class="card">
            <div class="project-info">
              <div class="project-bio">
                <h3>Project Four</h3>
                <p>React, Redux, SASS</p>
              </div>

              <div class="project-link">
                <a href="#" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
                <a href="#" target="_blank">
                  <i class="fas fa-globe"></i>
                </a>
              </div>
            </div>
          </div>

          <div href="" class="card">
            <div class="project-info">
              <div class="project-bio">
                <h3>Project Five</h3>
                <p>React, Redux, SASS</p>
              </div>

              <div class="project-link">
                <a href="#" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
                <a href="#" target="_blank">
                  <i class="fas fa-globe"></i>
                </a>
              </div>
            </div>
          </div>

          <div href="" class="card">
            <div class="project-info">
              <div class="project-bio">
                <h3>Project Six</h3>
                <p>React, Redux, SASS</p>
              </div>

              <div class="project-link">
                <a href="#" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
                <a href="#" target="_blank">
                  <i class="fas fa-globe"></i>
                </a>
              </div>
            </div>
          </div>
        </article>

        <a href="#" class="btn btn-secondary" target="_blank">
          See More <i class="fas fa-arrow-right"></i>
        </a>
      </section>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Daniel Lucumi | Software Engineer</title>;
