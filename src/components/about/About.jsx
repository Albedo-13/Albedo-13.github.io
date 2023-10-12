import data from "../../data/data";
import notebook from "../../assets/images/notebook.png";
import cat from "../../assets/gifs/coding-cat.gif";
import "./about.scss";
import circledText from "../../assets/images/circled-text.png";

export const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-wrapper-left">
            <div className="about-img undraggable">
              <img src={notebook} className="undraggable unselectable" alt="notebook" />
            </div>
            <span className="about-label">
              <img src={cat} alt="coding cat" className="about-label-image undraggable unselectable" />
              <img src={circledText} className="about-label-text undraggable unselectable" alt="front-end web developer" />
            </span>
          </div>
          <div className="about-wrapper-right">
            <h3 className="title">About me</h3>
            <h4 className="about-subtitle">A dedicated Front-end Developer based in {data.location} 📍</h4>
            <p className="about-description">{data.about}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
