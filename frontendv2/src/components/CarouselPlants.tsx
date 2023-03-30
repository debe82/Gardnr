import React, { FC, useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Context } from "../App";
import { IPlant, IUserPlants } from "../interfaces";

export const CarouselPlants = () => {
  const {
    plants,
    setPlants,
    userPlants,
    setUserPlants,
    user,
    setUser,
    setSpecificPlant
  } = useContext(Context);
  
  const listOfPlants: IUserPlants[] = user.listOfUserPlants;

  return (
    <>
      <div className="carousel-plants-container">
        {
          listOfPlants.map((e, index: number) => {
            return (
              <>
                <img key={index} onClick={() => 
                  {
                    setSpecificPlant(e.plant);
                    console.log(e.userPlantId)
                  }} className="carousel-plants-img" src={e.plant.pictureLink} alt="" />
              </>
            )
          })
        }
      </div>
      </>
  )
}