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
      <UserProfile />
    </>
  );
}

export default Homepage;
