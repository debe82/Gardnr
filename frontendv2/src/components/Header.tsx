import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";
import Popup from "reactjs-popup";
import { SearchBar } from "./SearchBar";

const Header = () => {
  const { user } = useContext(Context);

  const PopupExample = () => (
    <Popup
      trigger={
        <a
          href="#"
          className="header-container-button">
          <img
            src="magnifier.svg"
            alt="add plant button"
          />
        </a>
      }
      position="right center">
      <SearchBar />
    </Popup>
  );

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
        <PopupExample />
      </header>
      <h1 className="header-main-text">Gardnr</h1>
    </>
  );
};

export default Header;
