import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <header className="header-container">
        <a href="#" className="header-container-button">
          <img src="user.png" alt="user button" />
        </a>
        <a href="#" className="header-container-button">
          <img src="android-chrome-192x192 1.png" alt="logotype" />
        </a>
        <a href="#" className="header-container-button">
          <img src="trend.png" alt="add plant button" />
        </a>
      </header>
      <h1 className="header-main-text">Gardnr</h1>
    </>
  );
};

export default Header;
