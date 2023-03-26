import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { CarouselPlants } from './components/CarouselPlants';
import { PlantCard } from './components/PlantCard';
import { SearchBar } from './components/SearchBar';
import UserProfile from './components/UserProfile';
import SpecificPlantCard from './components/SpecificPlantCard';
import { getAllApiPlants, getAllUserPlants } from './api/dataManagement';
import { IPlant, IUserPlants } from './interfaces';
import Homepage from './pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import { createContext } from 'vm';

interface MyContextValue {
  plants: IPlant[];
  setplants: Dispatch<SetStateAction<IPlant[]>>;
  userPlants: IUserPlants[];
  setUserPlants: Dispatch<SetStateAction<IUserPlants[]>>;
}

function App() {
//   const MyContext = createContext({
//     plants: {},
//     setPlants: () => {},
//     userPlants: {},
//     setUserPlants: () => {}
// });
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
     {/* <MyContext.Provider value={{  plants, setPlants, userPlants, setUserPlants }}> */}
      <Header /> 
      <CarouselPlants /> 
      <PlantCard />
      <SearchBar />
      <UserProfile />
      <SpecificPlantCard />
      <Routes>
       {/*  <Route path="/" element={<Homepage/> }/> */}
        <Route path="/:id" element={<Homepage />} />
      </Routes>
  {/*     </MyContext.Provider> */}

    </div>
    
  );
}

export default App;
