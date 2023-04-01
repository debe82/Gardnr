import React, { useContext, useEffect, useState } from "react";
import { CarouselPlants } from "../components/CarouselPlants";
import Header from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import SpecificPlantCard from "../components/SpecificPlantCard";
import UserProfile from "../components/UserProfile";
import "../App.css";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Userpages from "./Userpages";
import { IUser } from "../interfaces";
import { getUserFromString } from "../helpMethods/getUserFromString";
import LoginButton from "../components/Auth/LoginButton";
import LogoutButton from "../components/Auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function Homepage() {

  //  const [authenticated, setAuthenticated] = useState(false);
  //const [loading, setLoading] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();
  

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Container fluid>
        {isAuthenticated ? (
          <div>
            <Userpages />
            <br />
            <LogoutButton />
          </div>
        ) : (
          <LoginButton />
        )}
      </Container>
    </div>
  );
}

export default Homepage;
