import React, { FC, useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Context } from "../App";
import { IPlant } from "../interfaces";

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
  
  const listOfPlants: IPlant[] = user.plants;

  return (
    <>
      <div className="carousel-plants-container">
        {
          listOfPlants.map((e, index: number) => {
            return (
              <>
                <img key={index} onClick={() => setSpecificPlant(e)} className="carousel-plants-img" src={e.pictureLink} alt="" />
              </>
            )
          })
        }
      </div>
      </>
  )
}