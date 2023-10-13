import { Link } from "react-router-dom";
import data from "../../data/data.js";
import { MapIcon, MailIcon } from "../../assets/icons/Icons.jsx";
import "./contact.scss";

export const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h3 className="title">Contact</h3>
        <h4 className="contact-subtitle">Don't be shy! Hit me up! 👇</h4>
        <div className="contact-wrapper">
          <div className="contact-item">
            <div className="contact-item-icon box">
              <MapIcon />
            </div>
            <div className="contact-item-about">
              <p className="contact-item-title">Location</p>
              <p className="contact-item-subtitle">
                {data.location}
              </p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon box">
              <MailIcon />
            </div>
            <div className="contact-item-about">
              <p className="contact-item-title">Location</p>
              <Link to={`mailto:${data.email}`} className="contact-item-subtitle">
                {data.email}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
