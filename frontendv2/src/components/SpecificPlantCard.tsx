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

  const listOfPlants: IUserPlants[] = user.listOfUserPlants;

 // console.log("date: ", specificPlant.startDate);
  const stringDate = specificPlant.startDate && specificPlant.startDate;
  //const realDate = specificPlant.startDate && specificPlant.startDate.getFullYear;

  const showWateringTime = () =>{
    const nowDay = new Date().getDate();
    const startDay = new Date(stringDate).getDate();
    const nowHour = new Date().getHours();
    const startHour = new Date(stringDate).getHours();
    const nowMin = new Date().getMinutes();
    const startMin = new Date(stringDate).getMinutes();
    const nowSec = new Date().getSeconds();
    const startSec = new Date(stringDate).getSeconds();



    const timeIncrement = specificPlant.startDate && specificPlant.timeIncrement;
  
    console.log("timeIncrement: ", timeIncrement);
    console.log("nowDatef: ", nowDay , ", ", nowHour, ", ", nowMin, ", ", nowSec);
    console.log("startDate: ", startDay);
  
    let daysLeft = nowDay - startDay;
    const hoursLeft = nowHour - startHour;
    const minutesLeft = nowMin - startMin;
    const secondsLeft = nowSec - startSec;

    // do{
       if(timeIncrement == 1) {
        daysLeft = 1
       }
    // }while(timeDiff > timeIncrement)
  
    console.log("time diff: ", daysLeft);
    return "" + daysLeft + "d:" + hoursLeft + "h:" + minutesLeft + "m:" + secondsLeft + "s";
  }

  const deletePlant = () => {
    console.log("userId: ", user.userId);
    if(specificPlant){
      removePlant(user.userId, specificPlant.userPlantId);
    }  
  }

  useEffect(() => {
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
            <li key={6} className="specific-plant-time">Time left: ({showWateringTime()})</li>
          </>
        ): null}
      
      <div className="specific-plant-card-status-watered">
        <FontAwesomeIcon className="h1 specific-plant-card-trashcan" onClick={deletePlant} icon={faTrash} />
      </div>
    </div>
  );
};

export default SpecificPlantCard;
