import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import classnames from "classnames";

import "./header.scss";
import { BurgerIcon } from "../../assets/icons/Icons";

const MobileNav = ({ isOpen, handleClick }) => {
  const mobileNavStyles = classnames("mobile-nav", { "mobile-nav-active": isOpen });
  return (
    <aside className={mobileNavStyles}>
      <button className="mobile-nav-cross" onClick={handleClick} role="close button">✕</button>
      <nav>
        <ul>
          <NavLinks handleClick={handleClick} />
        </ul>
      </nav>
    </aside>
  );
};

const NavLinks = ({ handleClick }) => {
  return (
    <>
      <li className="header-li" onClick={handleClick}>
        <HashLink to="#home">Home</HashLink>
      </li>
      <li className="header-li" onClick={handleClick}>
        <HashLink to="#about">About</HashLink>
      </li>
      <li className="header-li" onClick={handleClick}>
        <HashLink to="#projects">Projects</HashLink>
      </li>
      <li className="header-li" onClick={handleClick}>
        <HashLink to="#contact">Contact</HashLink>
      </li>
    </>
  );
};

export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavClickOpen = () => {
    setIsMobileNavOpen(true);
  };

  const handleMobileNavClickClose = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <header className="header box">
      <div className="header-wrapper">
        <h3 className="header-logo">
          <Link to="/">Albedo-13.dev</Link>
        </h3>
        <nav>
          <ul className="header-ul">
            <NavLinks />
            <li className="header-burger" onClick={handleMobileNavClickOpen}>
              <BurgerIcon />
            </li>
          </ul>
        </nav>
      </div>
      <MobileNav isOpen={isMobileNavOpen} handleClick={handleMobileNavClickClose} />
    </header>
  );
};
