import React from "react";
import "../Homepage.css";
import SignIn from "../components/SignIn";

function Homepage() {
  return (
    <>
      <div className="landing-page-container">
        <h1 className="landing-page-logo">Gardnr</h1>
        <SignIn />
      </div>
    </>
  );
}

export default Homepage;
