import { LinkedInIcon, GitHubIcon } from "../../assets/icons/Icons";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-title">Copyright © 2023. All rights are reserved</div>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/prokopenyapavel/" className="footer-socials-linkedin">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/Albedo-13" className="footer-socials-github">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
