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
     console.log("userPlants: ", user && user.userPlants);
  //   return true
  // });

   //  if( user?.userId == undefined ){return null}
   //console.log(user ? user.userId  : undefined);



 return (
  <>
    <div className="carousel-plants-container">
      {
        user && user.userPlants.map(
          (e) => <a key={e.UserPlantId}><img src={e.pictureLink} alt={"" + e.pictureLink} /> <p>bvbb</p></a>
        )
      }
    </div>
    </>
  )};


  
  // return (
  //   userPlants | user ? (
  //     userPlants.filter(e => e.user?.userId  === user.userId  )
  //     .map(e =>  {e.pictureLink}
  //      return (
  //       <div className="carousel-plants-container">
  //         <a href="#image1">
  //           <img src={e.pictureLink} alt="" />
  //         </a>
  //       </div>
  //       )
  //     }
  //     )
  //     ) : null
  //     )




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
