import React, { SyntheticEvent, useContext, useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import "../Addpage.css";
import { CarouselPlants } from "../components/CarouselPlants";
import { Context } from "../App";
import { IPlant, IUserPlants } from "../interfaces";
import { addPlant, updateUserPlant } from "../api/dataManagement";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

function Addpage() {
  const [message, setMessage] = useState<IUserPlants>();
  const [updated, setUpdated] = useState(message);
  const { plants, setPlants, userPlants, setUserPlants, user, setUser } =
    useContext(Context);
   const params = useParams();

    // const localUser = localStorage.getItem('user');
    // localUser ? console.log("this is localuser" , JSON.parse(localUser)) : null;
    // localUser?  setUser(JSON.parse(localUser)) : null;
    //localUser ? setUser(JSON.parse(localUser)) : null;
// localUser ?  JSON.parse(localUser) : null;

useEffect(() => {
  axios.get(`http://localhost:8080/api/users/${params.id}`).then((response) => {
    setUser(response.data);
  });
}, []);

  const addUserPlant = (plantname: string) => {
    const plantsToAdd: IPlant[] = plants.filter((p) =>
      p.plantName.includes(plantname)
    );
    addPlant(user.userId, plantsToAdd[0]); //addplant to userid, not .. it's hard coded
  };

  console.log(user);
  console.log(user.listOfUserPlants)

 //useEffect(() => {}, []);

  const handleChange = (event: any) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setUpdated(message);
    console.log("meassage: " , message);
    //message ?  updateUserPlant(user.userId, message): null;
  };

  return (
    <>
      <div className="addpage-container">
        <h1 className="addpage-logo">Gardnr</h1>
        <h3 className="addpage-item-container-heading">
          Add a new plant here!
        </h3>
        <SearchBar />
        <h3 className="addpage-item-container-heading">
          Edit name? Just click your plant!
        </h3>
        <div className="addpage-item-container">
          {user && user.listOfUserPlants && user.listOfUserPlants.map((e) => {
            return (
              <>
                <img
                  onClick={() => setMessage(e)}
                  className="addpage-item-img"
                  src={e.plant.pictureLink}
                  alt={e.plant.plantName}
                />
              </>
            );
          })}
        </div>
        <FormControl className="addpage-item-container-form">
          <Input
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            value={message && message.userPlantName}
          />
          <FormHelperText id="my-helper-text">
            You can edit the above line
          </FormHelperText>
        </FormControl>
        <div className="addpage-item-container-break"></div>
        <Button
          className="addpage-item-container-form-button"
          onClick={handleClick}
          variant="contained"
          color="success">
          Update!
        </Button>
      </div>
    </>
  );
}

export default Addpage;
