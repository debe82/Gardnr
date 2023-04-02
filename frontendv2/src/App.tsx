import { getAllUserPlants } from "./api/dataManagement";
import { IPlant, IUser, IUserPlants } from "./interfaces";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Userpages from "./pages/Userpages";
import Header from "./components/Header";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import LabelBottomNavigation from "./components/Navbar";
import Addpage from "./pages/Addpage";
import SignUp from "./components/SignUp";
import { NotFoundPage } from "./pages/NotFoundPage";

const initUser = {
  userId: 0,
  name: "",
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
  timeIncrement: 0,
  user: initUser,
  plant: initPlant,
};

export interface MyContextValue {
  plants: IPlant[];
  setPlants: Dispatch<SetStateAction<IPlant[]>>;
  userPlants: IUserPlants[];
  setUserPlants: Dispatch<SetStateAction<IUserPlants[]>>;
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  specificPlant: IUserPlants;
  setSpecificPlant: Dispatch<SetStateAction<IUserPlants>>;
  toggleShowSpecificPlant: boolean;
  setToggleShowSpecificPlant: Dispatch<SetStateAction<boolean>>;
}

export const Context = createContext<MyContextValue>({
  plants: [],
  setPlants: () => {},

  userPlants: [],
  setUserPlants: () => {},

  user: {
    userId: 0,
    name: "",
    email: "",
    listOfUserPlants: [],
  },
  setUser: () => {},

  specificPlant: {
    userPlantId: 0,
    startDate: new Date(),
    userPlantName: "",
    timeIncrement: 0,
    user: initUser,
    plant: initPlant,
  },
  setSpecificPlant: () => {},

  toggleShowSpecificPlant: false,
  setToggleShowSpecificPlant: () => {},
});

function App() {
  const userId = 1;
  const [plants, setPlants] = useState<IPlant[]>([]);
  const [userPlants, setUserPlants] = useState<IUserPlants[]>([]);
  const [user, setUser] = useState<IUser>(initUser);
  const [specificPlant, setSpecificPlant] =
    useState<IUserPlants>(initUserPlant);
  const [toggleShowSpecificPlant, setToggleShowSpecificPlant] = useState(false);

  useEffect(() => {
    axios.get(`/api/plants`).then((response) => {
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
          path='*'
          element={<NotFoundPage />}
        />
        <Route path="/"
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
         <Route
          path="/signup"
          element={<SignUp />}
        />
      </Routes>
      <LabelBottomNavigation />
    </Context.Provider>
  );
}
export default App;
