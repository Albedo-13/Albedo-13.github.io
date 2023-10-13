import { Link } from "react-router-dom";
import classnames from "classnames";

import data from "../../data/data.js";
import "./portfolio.scss";
import { GitHubIcon, OuterLinkIcon } from "../../assets/icons/Icons.jsx";
import cryptolimbo from "../../assets/images/portfolio-previews/crypto-limbo-preview.webp";
import marvelapi from "../../assets/images/portfolio-previews/marvelapi-preview.webp";
import coffeehouse from "../../assets/images/portfolio-previews/coffee-house-preview.webp";
import songbird from "../../assets/images/portfolio-previews/songbird-preview.webp";

const PortfolioProject = ({ project, image }) => {
  const itemClasses = classnames("portfolio-item", { "portfolio-item_reversed": project.id % 2 === 0 }, "box_rounded");

  return (
    <div className={itemClasses}>
      <Link target="_blank" rel="noreferrer" to={project.deployment_link} className="portfolio-item-img box_rounded">
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
          <Link target="_blank" rel="noreferrer" to={project.github_link} className="portfolio-item-links-github">
            Github
            <GitHubIcon />
          </Link>
          <Link target="_blank" rel="noreferrer" to={project.deployment_link} className="portfolio-item-links-outer">
            Live Demo
            <OuterLinkIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Portfolio = () => {
  const imagesArray = [cryptolimbo, marvelapi, coffeehouse, songbird];

  return (
    <section className="portfolio" id="projects">
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
