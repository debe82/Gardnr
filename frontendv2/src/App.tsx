import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import Header from './components/Header';
import { CarouselPlants } from './components/CarouselPlants';
import { PlantCard } from './components/PlantCard';
import { SearchBar } from './components/SearchBar';
import UserProfile from './components/UserProfile';
import SpecificPlantCard from './components/SpecificPlantCard';
import { getAllApiPlants, getAllUserPlants } from './api/dataManagement';
import { IPlant, IUser, IUserPlants } from './interfaces';
import Homepage from './pages/Homepage';
import { Route, Routes } from 'react-router-dom';

import axios from 'axios';
import Userpages from './pages/Userpages';




export interface MyContextValue {
  plants: IPlant[];
  setPlants: Dispatch<SetStateAction<IPlant[]>>;
  userPlants: IUserPlants[];
  setUserPlants: Dispatch<SetStateAction<IUserPlants[]>>;
}

export const Context = createContext<MyContextValue | undefined>(undefined);

function App() {
 
  
  // const value = createContext<MyContextValue>({
  //   plants: {},
  //   setPlants: () => {},
  //   userPlants: {},
  //   setUserPlants: () => {}
  // })
 
   
 
 



  const userId = 1;
  const [plants, setPlants] = useState<IPlant[]>([]);
  const [userPlants, setUserPlants] = useState<IUserPlants[]>([]);
  const [user, setUser] = useState<IUser>();

  const getApiPlants =async () => {
    const data = await getAllApiPlants();
    setPlants(data);
    console.log("plants:", data);
  }

  const getUserPlants =async () => {
    const data = await getAllUserPlants();
    setUserPlants(data);
  } 

useEffect(() => {
    axios.get(`http://localhost:8080/api/users/${userId}`)
    .then((response) => {
     setUser(response.data);    
    });
  }, []);
  console.log("this is user data" ,user)   


  return (    
      <Context.Provider value={{  plants, setPlants, userPlants, setUserPlants }}>  
        <Routes>
          <Route path="/" element={<Homepage/> }/>
          <Route path="/:id" element={<Userpages />} />
        </Routes>
      </Context.Provider>
  );
}

export default App;
