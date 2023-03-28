import React from "react";
import { CarouselPlants } from "./CarouselPlants";
import SpecificPlantCard from "./SpecificPlantCard";

const UserProfile = () => {
  return (
    <div className="user-profile-card">
      <h3>Welcome Marco!</h3>
      <CarouselPlants />
      <SpecificPlantCard />
    </div>
  );
};

export default UserProfile;
