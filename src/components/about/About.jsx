import data from "../../data/data";
import notebook from "../../assets/images/notebook.png";
import "./about.scss";

export const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-wrapper-left">
            <div className="about-img undraggable">
              <img src={notebook} alt="" />
            </div>
            <span className="about-label">

            </span>
          </div>
          <div className="about-wrapper-right">
            <h3 className="about-title">About me</h3>
            <h4 className="about-subtitle">A dedicated Front-end Developer based in {data.location} 📍</h4>
            <p className="about-description">{data.about}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
