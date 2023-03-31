<<<<<<< Updated upstream
import React from "react";

const SpecificPlantCard = () => {
  return (
    <div className="specific-plant-card">
      <img src="https://picsum.photos/250/200" alt="" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
        reiciendis aperiam dolorum ducimus, natus laboriosam voluptatum ab
        repudiandae nam, error inventore exercitationem et consequatur obcaecati
        incidunt atque cumque aut architecto. Harum dicta assumenda soluta nemo
        sit magnam quis dignissimos tempore quidem officiis culpa praesentium
        iure, asperiores temporibus doloribus. Veniam amet dolor nulla eum
        libero. Tenetur sunt repellendus aperiam optio deserunt?
      </p>
      <div className="specific-plant-card-status-watered">
        <p>Last time watered (21 hours ago, next time in 15 hours)</p>
=======
import React, { useContext, useEffect } from "react";
import { Context } from "../App";
import { IPlant, IUserPlants } from "../interfaces";
import { faCoffee, faTrash } from "@fortawesome/free-solid-svg-icons";
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
    toggleShowSpecificPlant,
    setToggleShowSpecificPlant,
  } = useContext(Context);

  console.log("userInfo: ", user);
  const listOfPlants: IUserPlants[] = user.listOfUserPlants;

  // console.log("date: ", specificPlant.startDate);
  const date = specificPlant.startDate && specificPlant.startDate.toString();

  const deletePlant = () => {
    console.log("userId: ", user.userId);
    if (specificPlant) {
      removePlant(user.userId, specificPlant.userPlantId);
    }
    //window.location.reload();
  };

  // useEffect(() => {
  //   setToggleShowSpecificPlant(true);
  // }, [specificPlant]);
  return (
    <div className="specific-plant-card">
      <img
        className="specific-plant-img"
        src={specificPlant && specificPlant.plant.pictureLink}
        alt=""
      />
      {toggleShowSpecificPlant
        ? specificPlant && (
            <>
              <ul className="specific-plant-card-list">
                <li key={1}>Name: {specificPlant.plant.plantName}</li>
                <li key={2}>
                  Ideal lighting: {specificPlant.plant.idealLight}
                </li>
                <li key={3}>
                  Frequency of water: {specificPlant.plant.watering}
                </li>
                <li key={4}>Max temperature: {specificPlant.plant.tempMax}</li>
                <li key={5}>
                  Minimum temperature: {specificPlant.plant.tempMin}
                </li>
              </ul>
            </>
          )
        : null}
      <div className="specific-plant-card-status-watered">
        <FontAwesomeIcon
          className="h1 specific-plant-card-trashcan"
          onClick={deletePlant}
          icon={faTrash}
        />
        <p>Last time watered ({date})</p>
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default SpecificPlantCard;
