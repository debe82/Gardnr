'use client'

import { useEffect, useState } from "react";
import Card from "./components/SpecificPlantCard";
import { Carousel } from "./components/Carousel";
import Header from "./components/Header";
import { getAllApiPlants, getAllUserPlants } from "./api/hello/dataManagement";
import UserProfile from "./components/UserProfile";
import { PlantCard } from "./components/PlantCard";
import { SearchBar } from "./components/SearchBar";
import SpecificPlantCard from "./components/SpecificPlantCard";


export default function Home() {

  const [plants, setPlants] = useState<IPlant[]>();
  const [userPlants, setUserPlants] = useState<IUserPlants[]>();

  const getApiPlants =async () => {
    const data = await getAllApiPlants();
    setPlants(data);
  }

  const getUserPlants =async () => {
    const data = await getAllUserPlants();
    setUserPlants(data);
  } 

  useEffect(() => {
    getApiPlants();
    getUserPlants();
    console.log("api:")
    console.log(plants)
    console.log("user:")
    console.log(userPlants)
  }, []);

  return (
    <main >
      <Header />
      <SearchBar />
      <Carousel />
      <SpecificPlantCard />
      <PlantCard />
      <UserProfile />
    </main>
  )
}