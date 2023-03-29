import React, { useContext } from "react";
import { Context } from "../App";
import { IPlant } from "../interfaces";
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SpecificPlantCard = () => {

  const {
    plants,
    setPlants,
    userPlants,
    setUserPlants,
    user,
    setUser,
  } = useContext(Context);

  const listOfPlants: IPlant[] = user.plants;
  //setPlants(listOfPlants);

  //console.log("plants:", plants);
  
  listOfPlants.map(e => console.log("plant: ", e.pictureLink));

  //console.log("plants0: ", plants[0]);
  //console.log("plants0: ", plants[0].pictureLink);


  return (
    <div className="specific-plant-card">
      <FontAwesomeIcon icon={faTrash} />
      <img className="specific-plant-img" src={listOfPlants[0] && listOfPlants[0].pictureLink} alt="" />
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
      </div>
    </div>
  );
};

export default SpecificPlantCard;
