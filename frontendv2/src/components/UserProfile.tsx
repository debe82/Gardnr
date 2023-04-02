import React, { useContext, useRef, useState } from "react";
import { MyContextValue, Context } from "../helper/context";
import { CarouselPlants } from "./CarouselPlants";
import SpecificPlantCard from "./SpecificPlantCard";
import Header from "./Header";
import LabelBottomNavigation from "./Navbar";
import "../App.css";

const UserProfile = () => {
  const { plants, setPlants, userPlants, setUserPlants, user, setUser } =
    useContext(Context);

  return (
    <div className="user-profile-card">
      <h1 className="user-profile-logo">Gardnr</h1>
      <h3 className="user-profile-name">Welcome {user && user.userName}!</h3>
      <h3>Let's take care of your plants!</h3>
      <CarouselPlants />
      <SpecificPlantCard />
    </div>
  );
};

export default UserProfile;
