import { Link } from "react-router-dom";
import data from "../../data/data.js";
import "../../styles/cv-styles.scss";
import avatar from "../../assets/images/avatar.png";

export const CVPage = () => {
  return (
    <div className="cv-body">
      <div className="cv-wrapper">
        <div className="cv-sidebar-wrapper">
          <div className="cv-profile-container">
            <img className="cv-profile" src={avatar} alt="" width="125" height="125" />
            <h1 className="cv-h cv-name">Pavel Prokopenya</h1>
            <h3 className="cv-h cv-tagline">Front-End React Developer</h3>
          </div>

          <div className="cv-contact-container cv-container-block">
            <ul className="cv-list-unstyled cv-contact-list">
              <li className="cv-email">
                <i className="fa fa-envelope"></i>prokopenya.work@gmail.com
              </li>
              <li className="cv-phone">
                <i className="fa fa-phone"></i>{data.phone}
              </li>
              <li className="cv-github">
                <i className="fa fa-github"></i>
                <Link className="cv-a" rel="noreferrer" to={data.github_account} target="_blank">
                  github.com/Albedo-13
                </Link>
              </li>
              <li className="cv-linkedin">
                <i className="fa fa-linkedin-square"></i>
                <Link
                  className="cv-a"
                  rel="noreferrer"
                  to={data.linkedin_account}
                  target="_blank"
                >
                  linkedin/prokopenyapavel
                </Link>
              </li>
              <li className="cv-skype">
                <i className="fa fa-skype"></i>
                <Link className="cv-a" rel="noreferrer" to="skype:live:pavel12minsk?chat" target="_blank">
                  Skype account
                </Link>
              </li>
              <li>
                <i className="fa fa-globe"></i>
                <Link className="cv-a" rel="noreferrer" to={data.personal_site} target="_blank">
                  Personal site
                </Link>
              </li>
            </ul>
          </div>
          <div className="cv-education-container cv-container-block">
            <h2 className="cv-container-block-title">Education</h2>
            <div className="cv-item">
              <h4 className="cv-degree">Secondary special education</h4>
              <h5 className="cv-meta">College of Business and Law</h5>
              <div className="cv-time">2017 - 2021</div>
            </div>
            <div className="cv-item">
              <h4 className="cv-degree">University education</h4>
              <h5 className="cv-meta">Belarusian State University of Informatics and Radioelectronics</h5>
              <div className="cv-time">2021 - 2025</div>
            </div>
          </div>

          <div className="cv-languages-container cv-container-block">
            <h2 className="cv-container-block-title">Languages</h2>
            <ul className="cv-list-unstyled cv-interests-list">
              <li>
                Russian <span className="cv-lang-desc">(Native)</span>
              </li>
              <li>
                English <span className="cv-lang-desc">(intermediate B1)</span>
              </li>
            </ul>
          </div>

          <div className="cv-interests-container cv-container-block">
            <h2 className="cv-container-block-title">Interests</h2>
            <ul className="cv-list-unstyled cv-interests-list">
              <li>Motorcycles</li>
              <li>Airsoft</li>
              <li>Motocross and enduro</li>
              <li>Sport</li>
            </ul>
          </div>
        </div>

        <div className="cv-main-wrapper">
          <section className="cv-section cv-summary-section">
            <h2 className="cv-section-title">
              <i className="fa fa-user"></i>About me
            </h2>
            <div className="cv-summary">
              <p className="cv-p">
                Hey there! My name is Paul and I am 22 years old, was graduated from the Faculty of Information
                Technology Software at College of Business and Law. At the moment, i entered the BSUIR in the same
                specialty for distance learning. As a Junior Front-End Developer, I possess an impressive arsenal of
                skills in HTML, CSS, JavaScript, React, Redux, Material UI, and SCSS. I excel in designing and
                maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting
                dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge
                development tools and techniques.
              </p>
            </div>
          </section>

          <section className="cv-section cv-experiences-section">
            <h2 className="cv-section-title">
              <i className="fa fa-briefcase"></i>Experience and skills
            </h2>
            <div className="cv-item">
              <div className="cv-meta">
                <h4 className="cv-experience">Working experience</h4>
                <div className="cv-upper-row">
                  <h3 className="cv-job-title">Computer Operator</h3>
                  <div className="cv-time">2023 - Now</div>
                </div>
                <div className="cv-company">LLC "ИнтерьерАльянс"</div>
                <div className="cv-upper-row">
                  <h3 className="cv-job-title">Diploma intern</h3>
                  <div className="cv-time">2021</div>
                </div>
                <div className="cv-company">LLC "Elinext"</div>
              </div>


              <div>
                <div className="cv-skills">
                  <h4 className="cv-skills-label">Skills</h4>
                  <ul className="cv-list-unstyled cv-interests-list">
                    <li>- HTML5 + CSS3 (SCSS & SASS preprocessors)</li>
                    <li>- Javascript + Typescript</li>
                    <li>- React</li>
                    <li>- Redux (Redux Toolkit)</li>
                    <li>- Material UI</li>
                    <li>- Git version control system (Github)</li>
                  </ul>
                </div>
                <div className="cv-s-skills">
                  <h4 className="cv-skills-label">Personal skills</h4>
                  <ul className="cv-list-unstyled cv-interests-list">
                    <li>- Accuracy & attention to details</li>
                    <li>- Discipline & consistency</li>
                    <li>- Ability to plan</li>
                    <li>- Readiness to learn</li>
                    <li>- Passion for work</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="cv-section cv-projects-section">
            <h2 className="cv-section-title">
              <i className="fa fa-archive"></i>Projects
            </h2>
            <div className="cv-intro">
              <p className="cv-p">Below is a brief description and links to projects hosted on GitHub.</p>
            </div>
            {data.projects.map((project) => <Project key={project.id} project={project} />)}
          </section>
        </div>
      </div>
    </div>
  );
};

const Project = ({ project }) => {
  return (
    <div className="cv-item">
      <span className="cv-project-title">
        <Link className="cv-a" rel="noreferrer" to={project.deployment_link} target="_blank">
          {project.name}
        </Link>
      </span>
      <span className="cv-project-tagline">
        {` - ${project.description}`}
      </span>
    </div>
  );
};
