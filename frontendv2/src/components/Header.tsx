import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <header className="header-container">
        <a
          href="#"
          className="header-container-button">
          <img
            src="user.svg"
            alt="user button"
          />
        </a>
        <a
          href="#"
          className="header-container-button">
          <img
            src="logo.svg"
            alt="logotype"
          />
        </a>
        <a
          href="#"
          className="header-container-button">
          <img
            src="magnifier.svg"
            alt="add plant button"
          />
        </a>
      </header>
      <h1 className="header-main-text">Gardnr</h1>
    </>
  );
};

export default Header;
