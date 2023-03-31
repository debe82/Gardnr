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
<<<<<<< Updated upstream
  email: "", 
  plants: [] 
}
=======
  email: "",
  listOfUserPlants: [],
};

const initPlant = {
  plantId: 0,
  plantName: "",
  plantNameLatin: "",
  watering: "",
  tempMax: "",
  tempMin: "",
  idealLight: "",
  description: "",
  pictureLink: "",
};

const initUserPlant = {
  userPlantId: 0,
  startDate: new Date(),
  userPlantName: "",
  user: initUser,
  plant: initPlant,
};
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    email: "", 
    plants: []
  }, 
  setUser: () => {}

=======
    email: "",
    listOfUserPlants: [],
  },
  setUser: () => {},

  specificPlant: {
    userPlantId: 0,
    startDate: new Date(),
    userPlantName: "",
    user: initUser,
    plant: initPlant,
  },
  setSpecificPlant: () => {},

  toggleShowSpecificPlant: false,
  setToggleShowSpecificPlant: () => {},
>>>>>>> Stashed changes
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
  const [user, setUser] = useState<IUser>(initUser);
<<<<<<< Updated upstream
=======
  const [specificPlant, setSpecificPlant] = useState<IUserPlants>(
    initUserPlant
  );
  const [toggleShowSpecificPlant, setToggleShowSpecificPlant] = useState(false);
>>>>>>> Stashed changes

  useEffect(() => {
    axios.get(`http://localhost:8080/api/plants`).then((response) => {
      setPlants(response.data);
    });
  }, []);


  // useEffect(() => {
  //   axios.get(`http://localhost:8080/api/userplants`).then((response) => {
  //     setUserPlants(response.data);
  //   });
  // }, []);

//  console.log("userplants", userPlants)

  // const getUserPlants = async () => {
  //   const data = await getAllUserPlants();
  //   setUserPlants(data);
  // };

  return (
<<<<<<< Updated upstream
    <Context.Provider value={{ plants, setPlants, userPlants, setUserPlants, user, setUser }}>
      <Header/>
=======
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
      }}
    >
      <Header />
>>>>>>> Stashed changes
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Userpages />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
