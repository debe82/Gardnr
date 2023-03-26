import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Carousel } from './components/Carousel';
import { PlantCard } from './components/PlantCard';
import { SearchBar } from './components/SearchBar';
import UserProfile from './components/UserProfile';
import SpecificPlantCard from './components/SpecificPlantCard';
import { getAllApiPlants, getAllUserPlants } from './api/dataManagement';
import { IPlant, IUserPlants } from './interfaces';
import Homepage from './pages/Homepage';

function App() {

  const [plants, setPlants] = useState<IPlant[]>([]);
  const [userPlants, setUserPlants] = useState<IUserPlants[]>([]);

  const getApiPlants =async () => {
    const data = await getAllApiPlants();
    setPlants(data);
  }

  const getUserPlants =async () => {
    const data = await getAllUserPlants();
    setUserPlants(data);
    console.log("userdata", data)
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
    <div className="App">
     
      <Header /> 
      <Carousel /> 
      <PlantCard />
      <SearchBar />
      <UserProfile />
      <SpecificPlantCard />
      {/* <Routes>
      <Route path="/" element={<Homepage/> }/>
      <Route path="/:id" element={<Homepage />} />
      </Routes> */}


    </div>
    
  );
}

export default App;
