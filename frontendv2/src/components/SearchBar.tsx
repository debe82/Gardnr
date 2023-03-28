import React, {
  ChangeEvent,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
import { Button, Dropdown, Form, InputGroup } from "react-bootstrap";
import { Context, MyContextValue } from "../App";
import { IPlant } from "../interfaces";

export const SearchBar = () => {
  const {
    plants,
    setPlants,
    userPlants,
    setUserPlants,
    user,
    setUser,
  } = useContext(Context);
  const [search, setSearch] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  userPlants.map((e) => console.log("this is a plantname", e.UserPlantId));

  const addUserPlant = (plantname: string) => {
    //console.log(user?.userEmail)
    plants.map((e) => console.log(e.plantName));
    const plantToAdd: IPlant[] = plants.filter((p) =>
      p.plantName.includes(plantname)
    );
    console.log(plantToAdd[0]);
    console.log("search", plantname);
  };

  return (
    <>
      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={search} onChange={onChange} />
          <button onClick={() => addUserPlant(search)}>Search</button>
        </div>
        <div className="dropdown">
          {plants
            .filter((e) => {
              
              const plantNames = e.plantName.toLowerCase();
              if(search === ""){return plantNames.startsWith("type here to start searching..."); }else{
              console.log("-- this is search", search);              
              return plantNames.startsWith(search.toLowerCase());}
            })
            .map((e) => (
              <li onClick={() => addUserPlant(e.plantName)}> {e.plantName} </li>
            ))}
        </div>
      </div>
    </>
  );
};
