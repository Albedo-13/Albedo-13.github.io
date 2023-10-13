import { Link } from "react-router-dom";
import classnames from "classnames";

import data from "../../data/data.js";
import "./portfolio.scss";
import { GitHubIcon, OuterLinkIcon } from "../../assets/icons/Icons.jsx";
import songbird from "../../assets/images/portfolio-previews/songbird-preview.webp";
import marvelapi from "../../assets/images/portfolio-previews/marvelapi-preview.png";

const PortfolioProject = ({ project, image }) => {
  const itemClasses = classnames("portfolio-item", { "portfolio-item_reversed": project.id % 2 === 0 }, "box_rounded");

  return (
    <div className={itemClasses}>
      <Link to="#" className="portfolio-item-img box_rounded">
        <img src={image} alt={project.name} className="" />
      </Link>
      <div className="portfolio-item-about">
        <div className="portfolio-item-name">
          {project.name} {project.icon}
        </div>
        <div className="portfolio-item-description">{project.description}</div>
        <div className="portfolio-item-skills">
          {project.tech_stack.map((skill) => (
            <div key={skill} className="portfolio-item-skill box">
              {skill}
            </div>
          ))}
        </div>
        <div className="portfolio-item-links">
          <a href={project.github_link} className="portfolio-item-links-github">
            Github
            <GitHubIcon />
          </a>
          <a href={project.deployment_link} className="portfolio-item-links-outer">
            Live Demo
            <OuterLinkIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export const Portfolio = () => {
  const imagesArray = [marvelapi, "", songbird];

  return (
    <section className="portfolio">
      <div className="container">
        <h3 className="title">Portfolio</h3>
        <h4 className="portfolio-subtitle">Each project is a unique piece of development 🧩</h4>
        <div className="portfolio-wrapper">
          {data.projects.map((project, i) => {
            return <PortfolioProject project={project} image={imagesArray[i]} key={project.id} />;
          })}
        </div>
      </div>
    </section>
  );
};
