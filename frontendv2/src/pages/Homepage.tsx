import React from "react";
import { CarouselPlants } from "../components/CarouselPlants";
import Header from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import SpecificPlantCard from "../components/SpecificPlantCard";
import UserProfile from "../components/UserProfile";
import "../Homepage.css";
import { LoginForm } from "../components/LoginForm";

function Homepage() {
  return (
    <>
      <div className="landing-page-container">
        <h1 className="landing-page-logo">Gardnr</h1>
        <LoginForm />
      </div>
    </>
  );
}

export default Homepage;
