import React, { SyntheticEvent, useContext, useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import "../Addpage.css";
import { CarouselPlants } from "../components/CarouselPlants";
import { Context } from "../App";
import { IPlant } from "../interfaces";
import { addPlant } from "../api/dataManagement";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";

function Addpage() {
  const [message, setMessage] = useState("");
  const [updated, setUpdated] = useState(message);
  const { plants, setPlants, userPlants, setUserPlants, user, setUser } =
    useContext(Context);

  const addUserPlant = (plantname: string) => {
    const plantsToAdd: IPlant[] = plants.filter((p) =>
      p.plantName.includes(plantname)
    );
    addPlant(1, plantsToAdd[0]);
  };

  console.log(user);
  console.log(user.listOfUserPlants)

  useEffect(() => {}, []);

  const handleChange = (event: any) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setUpdated(message);
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
                  onClick={() => setMessage(e.plant.plantName)}
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
            value={message}
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
