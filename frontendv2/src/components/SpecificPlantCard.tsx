import React, { useContext, useEffect, useState } from "react";
import { Context } from "../helpMethods/context";
import { IUserPlants } from "../interfaces";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
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

  const [timer, setTimer] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [isPlantTime, setIsPlantTime] = useState(false);
  
  const listOfPlants: IUserPlants[] = user.listOfUserPlants;

  const stringDate = specificPlant.startDate && specificPlant.startDate;
  const timeIncrement = specificPlant.startDate && specificPlant.timeIncrement;

  const nowDay = new Date().getDate();
  const startDay = new Date(stringDate).getDate();
  const nowHour = new Date().getHours();
  const startHour = new Date(stringDate).getHours();

  const timeRemaining = (nowDay - startDay) % timeIncrement;

  let daysLeft = 0;
  let hoursLeft = 0;

  const showWateringTime = () =>{

    daysLeft = Math.abs(nowDay - (startDay + timeIncrement));//nowDay - startDay;
    hoursLeft = Math.abs(startHour - nowHour);//nowHour - startHour;

    if(timeIncrement == 1) {
      daysLeft = 0
      hoursLeft = 23;
    }  
    
    if (daysLeft == timeIncrement) {
      daysLeft -= 1;
    }

  if (timeRemaining != 0) {
    daysLeft = timeIncrement - timeRemaining;
    setIsPlantTime(false);
    console.log("isPlantTime?:", isPlantTime)
  } else {
    setIsPlantTime(true);
    console.log("isPlantTime?:", isPlantTime)
  }

  console.log("isPlantTime?:", nowDay, startDay, timeIncrement, timeRemaining);


    if(timeIncrement == 1) {
      daysLeft = 0;
      hoursLeft = 23;
    }  

    if (daysLeft == timeIncrement) {
      daysLeft = daysLeft-1;
    }

    return "" + daysLeft + "d:" + hoursLeft + "h:";
  }

  console.log("isTIme :", isPlantTime);

  const deletePlant = () => {
    if(specificPlant){
      removePlant(user.userId, specificPlant.userPlantId);
    }  
  }

  useEffect(() => {
    setTimer(showWateringTime());
  }, [specificPlant])
  
  return (
    <div className="specific-plant-card">
      <img className="specific-plant-img" src={specificPlant && specificPlant.plant.pictureLink} alt="" />
      
        {toggleShowSpecificPlant ?
        specificPlant && (
          <>
            <li key={1}>Name: {specificPlant.userPlantName}</li>
            <li key={3}>Watering: {specificPlant.plant.watering}</li>
            <li key={6}>suggested watering every {timeIncrement} day(s)</li>
            <li key={7} className={isPlantTime ? "specific-plant-time-bg-orange" : "specific-plant-time-bg-green"} id="plant-time"  style={{/*backgroundColor: "rgba(157, 255, 127, 0.615)"*/}} >
              Time left next watering: ({timer})
            </li>
          </>
        ): null}
      
      <div className="specific-plant-card-status-watered">
        <FontAwesomeIcon className="h1 specific-plant-card-trashcan" onClick={deletePlant} icon={faTrash} />
      </div>
    </div>
  );
};

export default SpecificPlantCard;
