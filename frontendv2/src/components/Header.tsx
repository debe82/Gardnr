import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";

const Header = () => {
  const { user } = useContext(Context);

  return (
    <>
      <header className="header-container">
        <Link
          to={"/" + user.userId}
          className="header-container-button">
          <img
            src="user.svg"
            alt="user button"
          />
        </Link>
        <a
          href="/"
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
    </>
  );
};

export default Header;
