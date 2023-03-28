import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { getAllUserPlants } from "./api/dataManagement";
import { IPlant, IUser, IUserPlants } from "./interfaces";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";

import axios from "axios";
import Userpages from "./pages/Userpages";

export interface MyContextValue {
  plants: IPlant[];
  setPlants: Dispatch<SetStateAction<IPlant[]>>;
  userPlants: IUserPlants[];
  setUserPlants: Dispatch<SetStateAction<IUserPlants[]>>;
  user: IUser | undefined;
  setUser: Dispatch<SetStateAction<IUser| any>>;
}

export const Context = createContext<MyContextValue>({
  plants: [],
  setPlants: () => {},
  userPlants: [],
  setUserPlants: () => {},
  user: {
    userId: 0,
    authId: "",
    userName: "",
    userEmail: "", 
    userPlants: []
  }, 
  setUser: () => {}

});

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

  useEffect(() => {
    axios.get(`http://localhost:8080/api/plants`).then((response) => {
      setPlants(response.data);
    });
  }, []);

  const getUserPlants = async () => {
    const data = await getAllUserPlants();
    setUserPlants(data);
  };

  return (
    <Context.Provider value={{ plants, setPlants, userPlants, setUserPlants, user, setUser }}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Userpages />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
