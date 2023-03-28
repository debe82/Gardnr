import React, { useContext } from "react";
import { Context } from "../App";
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
      <h3>Welcome {user ? user.userName : "no name found"}!</h3>
      
      <CarouselPlants />
      <SpecificPlantCard />
    </div>
  );
};

export default UserProfile;
