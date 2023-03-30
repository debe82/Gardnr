import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const initUser = {
  userId: 0,
  authId: "",
  name: "",
  email: "", 
  listOfUserPlants: []
}

const initPlant = {
  plantId: 0,
  plantName: "",
  plantNameLatin: "",
  watering: "",
  tempMax: "",
  tempMin: "",
  idealLight: "",
  description: "",
  pictureLink: ""
}

const initUserPlant = {
  userPlantId: 0,
  startDate: new Date(),
  userPlantName: "",
  user: initUser,
  plant: initPlant
}

import { getAllUserPlants } from "./api/dataManagement";
import { IPlant, IUser, IUserPlants } from "./interfaces";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";

import axios from "axios";
import Userpages from "./pages/Userpages";
import Header from "./components/Header";

export interface MyContextValue {
  plants: IPlant[];
  setPlants: Dispatch<SetStateAction<IPlant[]>>;
  userPlants: IUserPlants[];
  setUserPlants: Dispatch<SetStateAction<IUserPlants[]>>;
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  specificPlant: IUserPlants;
  setSpecificPlant: Dispatch<SetStateAction<IUserPlants>>;
}

export const Context = createContext<MyContextValue>({
  plants: [],
  setPlants: () => {},
  userPlants: [],
  setUserPlants: () => {},
  user: {
    userId: 0,
    authId: "",
    name: "",
    email: "", 
    listOfUserPlants: []
  }, 
  setUser: () => {},

  specificPlant: {
    userPlantId: 0,
    startDate: new Date(),
    userPlantName: "",
    user: initUser,
    plant: initPlant
  },
  setSpecificPlant: () => {}

});

function App() {
  const userId = 1;
  const [plants, setPlants] = useState<IPlant[]>([]);
  const [userPlants, setUserPlants] = useState<IUserPlants[]>([]);
  const [user, setUser] = useState<IUser>(initUser);
  const [specificPlant, setSpecificPlant] = useState<IUserPlants>(initUserPlant);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/plants`).then((response) => {
      setPlants(response.data);
    });
  }, []);

  return (
    <Context.Provider value={{ plants, setPlants, userPlants, setUserPlants, user, setUser, specificPlant, setSpecificPlant  }}>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Userpages />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
