import React, { useContext, useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { Context } from "../App";

export const CarouselPlants = () => {
  const {
    plants,
    setPlants,
    userPlants,
    setUserPlants,
    user,
    setUser,
    setSpecificPlant,
    specificPlant,
    setToggleShowSpecificPlant,
  } = useContext(Context);

  const [listOfPlants, setListOfPlants] = useState(user.listOfUserPlants);

  useEffect(() => {
    setListOfPlants(user.listOfUserPlants);
    console.log("in useeffect carousel", specificPlant);
    if (!specificPlant || specificPlant.userPlantName === "") {
      setSpecificPlant(user.listOfUserPlants && user.listOfUserPlants[0]);
    }
  }, [specificPlant, user]);

  return (
    <>
      <div className="carousel-plants-container">
        {listOfPlants &&
          listOfPlants.map((e, index: number) => {
            return (
              <div
                className="carousel-plants-item"
                key={index}>
                <img
                  onClick={() => {
                    setSpecificPlant(e);
                    setToggleShowSpecificPlant(true);
                  }}
                  className="carousel-plants-item-img"
                  src={e.plant.pictureLink}
                  alt=""></img>
                <p className="carousel-plant-item-name">
                  {e.plant && e.plant.plantName}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};
