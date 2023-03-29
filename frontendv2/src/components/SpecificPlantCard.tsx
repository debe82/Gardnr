import React, { useContext, useEffect } from "react";
import { Context } from "../App";
import { IPlant } from "../interfaces";
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

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

  const listOfPlants: IPlant[] = user.plants;
  
  listOfPlants.map(e => console.log("plant: ", e.pictureLink));

  const deletePlant = () => {
    if(specificPlant){
      axios.delete(`http://localhost:8080/api/userplants/${specificPlant.plantId}`);
    }  
    //window.location.reload();
  }

  useEffect(() => {
    console.log(specificPlant)
  }, [specificPlant])
  
  return (
    <div className="specific-plant-card">
      <img className="specific-plant-img" src={specificPlant && specificPlant.pictureLink} alt="" />
      <p>
        {specificPlant && specificPlant.description}
      </p>
      <div className="specific-plant-card-status-watered">
      <FontAwesomeIcon className="h1 specific-plant-card-trashcan" onClick={deletePlant} icon={faTrash} />
        <p>Last time watered (21 hours ago, next time in 15 hours)</p>
      </div>
    </div>
  );
};

export default SpecificPlantCard;
