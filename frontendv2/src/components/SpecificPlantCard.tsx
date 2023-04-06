import { Alert } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../helperMethods/context";
import { initUserPlant} from "../helperMethods/initializer"
import { removePlant, updateUserPlant } from "../api/dataManagement";
import { IUserPlants } from "../interfaces";
import { showWateringTime } from "../helperMethods/watering";

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
  const stringDate = specificPlant && specificPlant.startDate;
  const timeIncrement =
    specificPlant && specificPlant.startDate && specificPlant.timeIncrement;
 

  const calcWater = () => {
    const dayAndHour = showWateringTime(stringDate, timeIncrement);

    if (dayAndHour[0] != 0) {
      setIsPlantTime(false);
      console.log("i'm, false")
    } else if (dayAndHour[0] == 0 && dayAndHour[1] < 11) {
      setIsPlantTime(true);
      console.log("i'm, true")
    } 

    return dayAndHour[0] + "d:" + dayAndHour[1] + "h";
  } 

  const deletePlant = () => {
    if (specificPlant) {
      removePlant(user.userId, specificPlant.userPlantId);
      const updatedPlantList = listOfPlants.filter(
        (e) => e.userPlantId != specificPlant.userPlantId
      );
      user.listOfUserPlants = updatedPlantList;
      setUser(JSON.parse(JSON.stringify(user)));
      setSpecificPlant(initUserPlant);
    }
  };

  const refreshTimer = () => {
    const newDate = new Date()
    setTimer(newDate.getDate() + "d:" + newDate.getHours()  + "h");
    specificPlant.startDate = newDate;
    specificPlant ? updateUserPlant(user.userId, specificPlant) : null;
  }

  useEffect(() => {
    if (user) setTimer(calcWater());
  }, [specificPlant, user, isPlantTime]);

  if (specificPlant == null) {
    return <p> There are no plants!</p>;
  }

  return (
    <div className="specific-plant-card">
      <img
        className="specific-plant-img"
        src={specificPlant && specificPlant.plant.pictureLink}
        alt={specificPlant && specificPlant.userPlantName}
      />
      {specificPlant && (
        <>
          <ul className="specific-plant-card-list">
            <li key={1}>Name: {specificPlant.userPlantName}</li>
            <li key={2}>Ideal lighting: {specificPlant.plant.idealLight}</li>
            <li key={4}>Max temperature: {specificPlant.plant.tempMax}</li>
            <li key={5}>Min temperature: {specificPlant.plant.tempMin}</li>
            <li key={6}>suggested watering every {timeIncrement} day(s)</li>
            <li
              className="plant-time-notification"
              id="plant-time">
              {isPlantTime ? (
                <Alert severity="error" onClick={refreshTimer}>Fresh water in: ({timer})</Alert>
              ) : (
                <Alert severity="success" onClick={refreshTimer}>Fresh water in: ({timer})</Alert>
              )}
            </li>
          </ul>
        </>
      )}
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
