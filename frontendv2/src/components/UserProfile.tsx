import React, { useContext } from "react";
import { Context } from "../App";
import "../App.css";
import { CarouselPlants } from "./CarouselPlants";
import SpecificPlantCard from "./SpecificPlantCard";

const UserProfile = () => {
  const { plants, setPlants, userPlants, setUserPlants, user, setUser } =
    useContext(Context);

  return (
    <div className="user-profile-card">
      <h1 className="user-profile-logo">Gardnr</h1>
      <h3 className="user-profile-name">Welcome {user && user.name}!</h3>
      <h3>Let's take care of your plants!</h3>
      <CarouselPlants />
      <SpecificPlantCard />
    </div>
  );
};

export default UserProfile;
