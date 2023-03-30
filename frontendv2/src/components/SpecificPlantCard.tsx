import React, { useContext, useEffect } from "react";
import { Context } from "../App";
import { IPlant, IUserPlants } from "../interfaces";
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removePlant } from "../api/dataManagement";

const SpecificPlantCard = () => {

  const {
    plants,
    setPlants,
    userPlants,
    setUserPlants,
    user,
    setUser,
    specificPlant,
    toggleShowSpecificPlant
  } = useContext(Context);

  console.log("userInfo: ", user);
  const listOfPlants: IUserPlants[] = user.listOfUserPlants;

 // console.log("date: ", specificPlant.startDate);
  const date = specificPlant.startDate && specificPlant.startDate.toString();

  const deletePlant = () => {
    console.log("userId: ", user.userId);
    if(specificPlant){
      removePlant(user.userId, specificPlant.userPlantId);
    }  
    //window.location.reload();
  }

  useEffect(() => {
    //console.log(specificPlant)
  }, [specificPlant])
  
  return (
    <div className="specific-plant-card">
      <img className="specific-plant-img" src={specificPlant && specificPlant.plant.pictureLink} alt="" />
      
        {toggleShowSpecificPlant ?
        specificPlant && (
          <>
            <li key={1}>Name: {specificPlant.plant.plantName}</li>
            <li key={2}>Ideal light: {specificPlant.plant.idealLight}</li>
            <li key={3}>Watering: {specificPlant.plant.watering}</li>
            <li key={4}>TMax: {specificPlant.plant.tempMax}</li>
            <li key={5}>Tmin: {specificPlant.plant.tempMin}</li>
          </>
        ): null}
      
      <div className="specific-plant-card-status-watered">
      <FontAwesomeIcon className="h1 specific-plant-card-trashcan" onClick={deletePlant} icon={faTrash} />
        <p>Last time watered ({date})</p>
      </div>
    </div>
  );
};

export default SpecificPlantCard;
