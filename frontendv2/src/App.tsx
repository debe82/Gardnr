import { getAllUserPlants } from "./api/dataManagement";
import { IPlant, IUser, IUserPlants } from "./interfaces";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Userpages from "./pages/Userpages";
import Header from "./components/Header";
import { initUser, initPlant, initUserPlant } from "./helper/initializer";
import { MyContextValue, Context } from "./helper/context";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import LabelBottomNavigation from "./components/Navbar";
import Addpage from "./pages/Addpage";


function App() {
  const userId = 1;
  const [plants, setPlants] = useState<IPlant[]>([]);
  const [userPlants, setUserPlants] = useState<IUserPlants[]>([]);
  const [user, setUser] = useState<IUser>(initUser);
  const [specificPlant, setSpecificPlant] =
    useState<IUserPlants>(initUserPlant);
  const [toggleShowSpecificPlant, setToggleShowSpecificPlant] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/plants`).then((response) => {
      setPlants(response.data);
    });
  }, []);

  return (
    <Context.Provider
      value={{
        plants,
        setPlants,
        userPlants,
        setUserPlants,
        user,
        setUser,
        specificPlant,
        setSpecificPlant,
        toggleShowSpecificPlant,
        setToggleShowSpecificPlant,
      }}>
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/:id"
          element={<Userpages />}
        />
        <Route
          path="/:id/add"
          element={<Addpage />}
        />
      </Routes>
      <LabelBottomNavigation />
    </Context.Provider>
  );
}
export default App;
