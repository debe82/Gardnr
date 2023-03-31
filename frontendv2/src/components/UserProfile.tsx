import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
<<<<<<< Updated upstream
      <h3>Welcome {user && user.name}!</h3>
      
=======
      <h3 className="user-profile-name">Welcome {user && user.name}!</h3>
      <h3>Let's take care of your plants!</h3>
>>>>>>> Stashed changes
      <CarouselPlants />
      <SpecificPlantCard />
    </div>
  );
};

export default UserProfile;
