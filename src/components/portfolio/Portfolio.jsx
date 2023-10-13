import { Link } from "react-router-dom";

import data from "../../data/data.js";
import "./portfolio.scss";
import songbird from "../../assets/images/portfolio-previews/songbird-preview.webp";
import marvelapi from "../../assets/images/portfolio-previews/marvelapi-preview.png";

const PortfolioProject = ({ project, image }) => {
  return (
    <div className="portfolio-item box_rounded">
      <Link to="#" className="portfolio-item-img box_rounded">
        <img src={image} alt={project.name} className="" />
        [image]
      </Link>
      <div className="portfolio-item-about">
        <div className="portfolio-item-name">{project.name}</div>
      </div>
    </div>
  );
};

export const Portfolio = () => {
  const imagesArray = [songbird, marvelapi];

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
