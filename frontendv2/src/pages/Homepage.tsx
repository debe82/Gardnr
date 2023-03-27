import React from 'react'
import { CarouselPlants } from '../components/CarouselPlants'
import Header from '../components/Header'
import { PlantCard } from '../components/PlantCard'
import { SearchBar } from '../components/SearchBar'
import SpecificPlantCard from '../components/SpecificPlantCard'
import UserProfile from '../components/UserProfile'

function Homepage() {


  return (
    <>
      <CarouselPlants /> 
      <PlantCard />
      <SearchBar />
      <UserProfile />
      <SpecificPlantCard />
    </>
  )
}

export default Homepage