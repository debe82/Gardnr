import React, { useContext, useEffect, useState } from "react";
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

  const [timer, setTimer] = useState("");
  const [refresh, setRefresh] = useState(false);
  //const [isPlantTime, setIsPlantTime] = useState(false);
  let isPlantTime = false;
 

  const [days, setDays] = useState(1);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  
  const listOfPlants: IUserPlants[] = user.listOfUserPlants;

  const stringDate = specificPlant.startDate && specificPlant.startDate;
  const timeIncrement = specificPlant.startDate && specificPlant.timeIncrement;

  const showWateringTime = () =>{

    const nowDay = new Date().getDate();
    const startDay = new Date(stringDate).getDate();
    //setDays(new Date(stringDate).getDate());
    const nowHour = new Date().getHours();
    const startHour = new Date(stringDate).getHours();
    //setHours(new Date(stringDate).getHours());
    const nowMin = new Date().getMinutes();
    const startMin = new Date(stringDate).getMinutes();
    //setMinutes(new Date(stringDate).getMinutes());
    const nowSec = new Date().getSeconds();
    const startSec = new Date(stringDate).getSeconds();
    //setSeconds(new Date(stringDate).getSeconds())

    let daysLeft = Math.abs(nowDay - (startDay + timeIncrement));//nowDay - startDay;
    let hoursLeft = Math.abs(hours - nowHour);//nowHour - startHour;

    const minutesLeft = Math.abs(60 - nowMin);//nowMin - startMin;
    const secondsLeft = Math.abs(60 - nowSec);//nowSec - startSec;

    if(timeIncrement == 1) {
      daysLeft = 0
      hoursLeft = 23;
    }  
    
    if (daysLeft == timeIncrement) {
      daysLeft -= 1;
    }

  //   console.log("increment: ", timeIncrement);
  //   console.log("startDay: ", days);
  //   console.log("startHours: ", hours);
  //   console.log("startMinutes: ", minutes);
  //   console.log("startSeconds: ", seconds);

  // setDaysLeft(Math.abs(nowDay - (days + timeIncrement)));//nowDay - startDay;
  // setHoursLeft(Math.abs(hours - nowHour));//nowHour - startHour;

  // setMinutesLeft(Math.abs(60 - nowMin));//nowMin - startMin;
  // setSecondsLeft( Math.abs(60 - nowSec));//nowSec - startSec;

    if(timeIncrement == 1) {
      setDaysLeft(0);
      setHoursLeft(23);
    }  

    if (daysLeft == timeIncrement) {
      setDaysLeft(daysLeft-1);
    }

    return "" + daysLeft + "d:" + hoursLeft + "h:" + minutesLeft + "m:" + secondsLeft + "s";
  }


  if (hoursLeft > 3) {
    isPlantTime = false;
    //setIsPlantTime(false); //.style.backgroundColor = "rgba(157, 255, 127, 0.615)"; // IT WORKS
  } else {
    isPlantTime = true;
    //setIsPlantTime(true); //.style.backgroundColor = "rgba(206, 104, 46, 0.615)"; //
  }

  console.log("isTIme :", isPlantTime);

  const deletePlant = () => {
    if(specificPlant){
      removePlant(user.userId, specificPlant.userPlantId);
      //setRefresh(true);
    }  
  }

  useEffect(() => {
    //const interval = setInterval(() => showWateringTime(), 1000);
    //return () => clearInterval(interval);

    setTimer(showWateringTime());
  }, [specificPlant, refresh])
  
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
            <li key={6}>suggested watering every {timeIncrement} day(s)</li>
            <li key={7} className={isPlantTime ? "specific-plant-time-bg-orange" : "specific-plant-time-bg-green"} id="plant-time"  style={{/*backgroundColor: "rgba(157, 255, 127, 0.615)"*/}} >
              Time passed since last watering: ({timer})
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
