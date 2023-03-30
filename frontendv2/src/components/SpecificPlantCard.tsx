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
    specificPlant
  } = useContext(Context);

  //const listOfPlants: IPlant[] = user.plants;
  const listOfPlants: IUserPlants[] = user.listOfUserPlants;
  //console.log("userPlants:", listOfPlants.length);
  //userPlants.map(e => console.log("plant: ", e.startDate));

  const deletePlant = () => {
    if(specificPlant){
      removePlant(specificPlant.plantId);
    }  
    //window.location.reload();
  }

  useEffect(() => {
    //console.log(specificPlant)
  }, [specificPlant])
  
  return (
    <div className="specific-plant-card">
      <img className="specific-plant-img" src={specificPlant && specificPlant.pictureLink} alt="" />
      
        {specificPlant && (
          <>
            <li key={1}>Name: {specificPlant.plantName}</li>
            <li key={2}>Ideal light: {specificPlant.idealLight}</li>
            <li key={3}>Watering: {specificPlant.watering}</li>
            <li key={4}>TMax: {specificPlant.tempMax}</li>
            <li key={5}>Tmin: {specificPlant.tempMin}</li>
          </>
        )}
      
      <div className="specific-plant-card-status-watered">
      <FontAwesomeIcon className="h1 specific-plant-card-trashcan" onClick={deletePlant} icon={faTrash} />
        <p>Last time watered ({})</p>
      </div>
    </div>
  );
};

export default SpecificPlantCard;
