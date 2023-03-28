import React from "react";
import { CarouselPlants } from "../components/CarouselPlants";
import Header from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import SpecificPlantCard from "../components/SpecificPlantCard";
import UserProfile from "../components/UserProfile";
import "../App.css";

function Homepage() {
  return (
    <>
      <Header />
      {/* <SearchBar /> */}
      <article className="article-intro-description">
        Welcome to myGrdnr! Here you can keep track of your plants!
        Take care of them: a reminder will update you for watering; 
        the details page will inform you about the sunlight, the
        temperature and much more!
      </article>
    </>
  );
}

export default Homepage;
