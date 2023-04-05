import { Button, FormControl, FormHelperText, Input } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Addpage.css";
import { Context } from "../helperMethods/context";
import { addPlant, updateUserPlant } from "../api/dataManagement";
import { SearchBar } from "../components/SearchBar";
import { IPlant, IUserPlants } from "../interfaces";

function Addpage() {
  const [message, setMessage] = useState("");
  const [currPlant, setCurrPlant] = useState<IUserPlants>();
  const { plants, userPlants, setUserPlants, user, setUser } =
    useContext(Context);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users/${params.id}`)
      .then((response) => {
        setUser(response.data);
      });
  }, [userPlants]);
  
  const handleChange = (event: any) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    currPlant ? (currPlant.userPlantName = message) : null;
    currPlant ? updateUserPlant(user.userId, currPlant) : null;
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
          {user &&
            user.listOfUserPlants &&
            user.listOfUserPlants.map((e) => {
              return (
                <div className="addpage-item-container-button">
                  <img
                    onClick={() => {
                      setMessage(e.userPlantName);
                      setCurrPlant(e);
                    }}
                    className="addpage-item-img"
                    src={e.plant.pictureLink}
                    alt={e.plant.plantName}
                  />
                  <p className="addpage-item-name">
                    {e.plant && e.plant.plantName}
                  </p>
                </div>
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