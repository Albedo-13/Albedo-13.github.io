import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./header.scss";

export const Header = () => {
  return (
    <header className="header box">
      <div className="header-wrapper">
        <h3 className="header-logo">
          <Link to="/">Albedo-13.dev</Link>
        </h3>
        <nav>
          <ul className="header-ul">
            <li className="header-li">
              <HashLink to="#home">Home</HashLink>
            </li>
            <li className="header-li">
              <HashLink to="#about">About</HashLink>
            </li>
            <li className="header-li">
              <HashLink to="#projects">Projects</HashLink>
            </li>
            <li className="header-li">
              <HashLink to="#contact">Contact</HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
