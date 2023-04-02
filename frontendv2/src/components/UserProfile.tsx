import React, { useContext } from "react";
import { Context, MyContextValue } from "../helper/context";
import { CarouselPlants } from "./CarouselPlants";
import SpecificPlantCard from "./SpecificPlantCard";

const UserProfile = () => {
  const {
    plants, 
    setPlants,
    userPlants,
    setUserPlants,
    user,
    setUser,
  } = useContext(Context);
  return (
    <div className="user-profile-card">
      <h3>Welcome {user && user.userName}!</h3>
      <h3>Let's take care of your plants!</h3>
      <CarouselPlants />
      <SpecificPlantCard />
    </div>
  );
};

export default UserProfile;
