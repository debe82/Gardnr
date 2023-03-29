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
  } = useContext(Context);
  
  // const filtered = userPlants.filter(e => {
    // console.log("user: ", user.plants.length);
     const listOfPlants: IPlant[] = user.plants;
     //setPlants(listOfPlants);
     //const plant: IPlant = user.plants[0];
    // console.log("plant: ", plant && plant.description);

    //plants.map(e => console.log("plant: ", e));



 return (
  <>
    <div className="carousel-plants-container">
      {
           listOfPlants.map((e, index: number) => {
            
            return (
              <>
                <img key={index} className="carousel-plants-img" src={e.pictureLink} alt="" />
              </>
            )
           })
      }
    </div>
    </>
  )
}


   
