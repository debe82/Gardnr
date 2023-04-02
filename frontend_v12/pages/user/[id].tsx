"use client";

import React, { useEffect, useState } from "react";
import router, { useRouter } from "next/router";
import { CarouselPlants } from "../../components/CarouselPlants";
import UserProfile from "../../components/UserProfile";
import { PlantCard } from "../../components/PlantCard";
import SpecificPlantCard from "../../components/SpecificPlantCard";
import Header from "../../components/Header";
import { getUser } from "../api/dataManagement";
import { IUser } from "../interfaces";

export const UserPage = () => {
  const router = useRouter();

  const [userPlants, setUserPlants] = useState([]);
  const [user, setUser] = useState<IUser>();
  const [userId, setId] = useState();

  const id = "1";
  console.log("id;", id);

  const fetchData = async () => {
    const fetchedUser = await getUser(id).then((u) => {
      setUser(u);
    });
    console.log("user: ", fetchedUser);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //
  //authId = vbvfskjdfh47ui564fgbdk5iit
  return (
    <>
      <Header />
      <div>page for user {id}</div>
      {user ? (
        <>
          <p>{user.userName}</p>
        </>
      ) : null}

    <CarouselPlants />
    <UserProfile />
    </>
    
  );
};

export default UserPage;
