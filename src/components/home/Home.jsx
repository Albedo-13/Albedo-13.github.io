import { LinkedIn, GitHub } from "../../assets/icons/Socials";
import data from "../../data/data.js";
import avatar from "../../assets/images/avatar.png";
import "./home.scss";

const Skills = ({ skills }) => {
  return skills.map((skill) => (
    <li className="home-skills-item" key={skill}>
      <img src={`https://skillicons.dev/icons?i=${skill}`} alt="html" />
    </li>
  ));
};

export const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="home-wrapper">
          <div className="home-wrapper-left">
            <h1 className="home-title">Front-End React Developer</h1>
            <p className="home-subtitle">
              Hi, I'm Pavel Prokopenya. A passionate Front-end React Developer based in Minsk, Belarus. 📍
            </p>
            <div className="home-socials">
              <a href="https://www.linkedin.com/in/prokopenyapavel/" className="home-socials-linkedin">
                <LinkedIn />
              </a>
              <a href="https://github.com/Albedo-13" className="home-socials-github">
                <GitHub />
              </a>
            </div>
          </div>
          <div className="home-wrapper-right">
            <img className="undraggable" src={avatar} alt="avatar" />
          </div>
        </div>
        <div className="home-skills">
          <p className="home-skills-label">Tech Stack</p>
          <ul className="home-skills-wrapper">
            <Skills skills={data.skills} />
          </ul>
        </div>
      </div>
    </section>
  );
};
