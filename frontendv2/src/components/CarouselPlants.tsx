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
     console.log("user: ", user.plants.length);
     const listOfPlants: IPlant[] = user.plants;
     //const plant: IPlant = user.plants[0];
    // console.log("plant: ", plant && plant.description);

    listOfPlants.map(e => console.log("plant: ", e));



 return (
  <>
    <div className="carousel-plants-container">
      {
           listOfPlants.map(e => {
            
            return (
              <>
            <p>{e.plantName}</p>
            <img src={e.pictureLink} alt="" />
</>
            )
           })
      }
    </div>
    </>
  )};


   /* { <>{
      userPlants.filter(e => e.user === user?.userId  )    }
      <h3>Let's take care of your plants!</h3>      
      <div className="carousel-plants-container">
        <a href="#image1">
          <img src="https://picsum.photos/85/85" alt="" />
        </a>
        <a href="#image2">
          <img src="https://picsum.photos/85/85" alt="" />
        </a>
        <a href="#image3">
          <img src="https://picsum.photos/85/85" alt="" />
        </a>
        <a href="#image4">
          <img src="https://picsum.photos/85/85" alt="" />
        </a>
        <a href="#image5">
          <img src="https://picsum.photos/85/85" alt="" />
        </a>
        <a href="#image6">
          <img src="https://picsum.photos/85/85" alt="" />
        </a>
      </div>
    </>
  );
}; */
