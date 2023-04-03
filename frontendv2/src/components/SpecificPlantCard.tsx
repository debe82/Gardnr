import React, { useContext, useEffect, useState } from "react";
import { Context } from "../App";
import { IPlant, IUserPlants } from "../interfaces";
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
    setSpecificPlant,
    toggleShowSpecificPlant,
  } = useContext(Context);


  const [timer, setTimer] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [isPlantTime, setIsPlantTime] = useState(false);

  const listOfPlants: IUserPlants[] = user.listOfUserPlants;

  const stringDate =   specificPlant  && specificPlant.startDate;
  const timeIncrement = specificPlant &&  specificPlant.startDate && specificPlant.timeIncrement;

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
  const timeRemaining = (nowDay - startDay) % timeIncrement;

  let daysLeft = 0;
  let hoursLeft = 0;

  const showWateringTime = () => {
    //setSeconds(new Date(stringDate).getSeconds())

    daysLeft = Math.abs(nowDay - (startDay + timeIncrement)); //nowDay - startDay;
    hoursLeft = Math.abs(startHour - nowHour); //nowHour - startHour;

    const minutesLeft = Math.abs(60 - nowMin); //nowMin - startMin;
    const secondsLeft = Math.abs(60 - nowSec); //nowSec - startSec;

    if (timeIncrement == 1) {
      daysLeft = 0;
      hoursLeft = 23;
    }

    if (daysLeft == timeIncrement) {
      daysLeft -= 1;
      hoursLeft = 23;
    }

    if (timeRemaining != 0) {
      //setDaysLeft(timeIncrement - timeRemaining);
      daysLeft = timeIncrement - timeRemaining;
      //isPlantTime = false;
      setIsPlantTime(false);
      //setIsPlantTime(false); //.style.backgroundColor = "rgba(157, 255, 127, 0.615)"; // IT WORKS
    } else {
      //isPlantTime = true;
      setIsPlantTime(true);
      //setIsPlantTime(true); //.style.backgroundColor = "rgba(206, 104, 46, 0.615)"; //
    }

    if (timeIncrement == 1) {
      daysLeft = 0;
      // setDaysLeft(0);
      hoursLeft = 23;
      // setHoursLeft(23);
    }

    if (daysLeft == timeIncrement) {
      daysLeft = daysLeft - 1;
    }

    console.log("daysLeft:", daysLeft);
    console.log("hoursLeft:", hoursLeft);
    console.log("timeIncremnent:", timeIncrement);
    console.log("isPlantTime:", isPlantTime);

    return "" + daysLeft + "d:" + hoursLeft + "h:"; // + minutesLeft + "m:" + secondsLeft + "s";
  };

  const deletePlant = () => {
    if (specificPlant) {
      console.log("deleting specific plant")
      removePlant(user.userId, specificPlant.userPlantId);
      const updatedPlantList = listOfPlants.filter(e => e.userPlantId != specificPlant.userPlantId)
      user.listOfUserPlants = updatedPlantList;
      setUser(JSON.parse(JSON.stringify(user)))
      setSpecificPlant(null);
    }
  };

  useEffect(() => {
    if (user)
    console.log("updating timer")
    setTimer(showWateringTime());
  }, [specificPlant, user]);

  if(specificPlant == null){return <p> There are no plants!</p>}

  return (
    <div className="specific-plant-card">
      <img
        className="specific-plant-img"
        src={specificPlant && specificPlant.plant.pictureLink}
        alt={specificPlant && specificPlant.userPlantName}
      />
      {//toggleShowSpecificPlant
         //specificPlant && (
            <>
              <ul className="specific-plant-card-list">
                <li key={1}>Name: {specificPlant && specificPlant.plant.plantName}</li>
                <li key={2}>
                  Ideal lighting: {specificPlant && specificPlant.plant.idealLight}
                </li>
                <li key={4}>Max temperature: {specificPlant && specificPlant.plant.tempMax}</li>
                <li key={5}>
                  Minimum temperature: {specificPlant && specificPlant.plant.tempMin}
                </li>
                <li key={6}>suggested watering every {timeIncrement} day(s)</li>
                <li
                  className={
                    isPlantTime
                      ? "orange specific-plant-time-bg"
                      : "green specific-plant-time-bg"
                  }
                  id="plant-time"
                  style={
                    {
                      // backgroundColor: "rgba(157, 255, 127, 0.615)",
                    }
                  }>
                  Fresh water in: ({timer})
                </li>
              </ul>
            </>
         // )
        }
      <div className="specific-plant-card-break"></div>
      <img
        src="trashcan.svg"
        className="specific-plant-card-trashcan"
        onClick={deletePlant}
      />
    </div>
  );
};

export default SpecificPlantCard;
