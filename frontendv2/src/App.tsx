import React, {
  useEffect,
  useState,
} from "react";
import { IPlant, IUser, IUserPlants } from "./interfaces";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Userpages from "./pages/Userpages";
import Header from "./components/Header";
import { initUser, initPlant, initUserPlant } from "./helpMethods/initializer";
import {  Context } from "./helpMethods/context";

function App() {
  const [plants, setPlants] = useState<IPlant[]>([]);
  const [userPlants, setUserPlants] = useState<IUserPlants[]>([]);
  const [user, setUser] = useState<IUser>(initUser);
  const [specificPlant, setSpecificPlant] = useState<IUserPlants>(initUserPlant);
  const [toggleShowSpecificPlant, setToggleShowSpecificPlant] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  authenticated ? 
    useEffect(() => {
      axios.get(`http://localhost:8080/api/plants`).then((response) => {
        setPlants(response.data);
      });
    }, [])
    : null;

  return (
    <Context.Provider value={{ 
      plants, setPlants, 
      userPlants, setUserPlants, 
      user, setUser, 
      specificPlant, setSpecificPlant, 
      toggleShowSpecificPlant, setToggleShowSpecificPlant,   
      authenticated, setAuthenticated
      }}>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Userpages />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
