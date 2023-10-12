import { HashLink } from "react-router-hash-link";

import "./header.scss";

export const Header = () => {
  return (
    <header className="header box">
      <div className="header-wrapper">
        <h3 className="header-logo">
          <a href="/">Albedo-13.dev</a>
        </h3>
        <nav className="header-nav">
          <ul className="header-ul">
            <li className="header-li">
              <HashLink href="#home">Home</HashLink>
            </li>
            <li className="header-li">
              <HashLink href="#about">About</HashLink>
            </li>
            <li className="header-li">
              <HashLink href="#projects">Projects</HashLink>
            </li>
            <li className="header-li">
              <HashLink href="#contact">Contact</HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
