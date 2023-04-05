import axios from "axios";
import React, {
  useEffect,
  useState,
} from "react";
import { Route, Routes } from "react-router-dom";
import LabelBottomNavigation from "./components/Navbar";
import SignUp from "./components/SignUp";
import { IPlant, IUser, IUserPlants } from "./interfaces";
import Addpage from "./pages/Addpage";
import Homepage from "./pages/Homepage";
import { NotFoundPage } from "./pages/NotFoundPage";
import Subscription from "./pages/Subscription";
import Userpages from "./pages/Userpages";
import { initUser, initUserPlant } from "./helperMethods/initializer";
import { Context } from "./helperMethods/context";

function App() {
  const userId = 1;
  const [plants, setPlants] = useState<IPlant[]>([]);
  const [userPlants, setUserPlants] = useState<IUserPlants[]>([]);
  const [user, setUser] = useState<IUser>(initUser);
  const [specificPlant, setSpecificPlant] =
    useState<IUserPlants>(initUserPlant);
  const [toggleShowSpecificPlant, setToggleShowSpecificPlant] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/api/plants").then((response) => {
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
          path="*"
          element={<NotFoundPage />}
        />
        <Route
          path="/"
          element={<Homepage />}
        />
        {userId ? (
          <>
            <Route
              path="/:id"
              element={<Userpages />}
            />
            <Route
              path="/:id/add"
              element={<Addpage />}
            />
            <Route
              path="/:id/subscription"
              element={<Subscription />}
            />
          </>
        ) : null}
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
