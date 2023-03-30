import React, {
  ChangeEvent,
  SyntheticEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { Button, Dropdown, Form, InputGroup } from "react-bootstrap";
import { addPlant } from "../api/dataManagement";
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

  const addUserPlant = (plantname: string) => {
    const plantsToAdd: IPlant[] = plants.filter((p) =>
      p.plantName.includes(plantname)
    );

    addPlant(1, plantsToAdd[0]);
    //window.location.reload();
   };

  //  useEffect(() =>{

  //  }, []);

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
            .map((e, index: number) => (
              <li key={index} onClick={() => addUserPlant(e.plantName)}> {e.plantName} </li>
            ))}
        </div>
      </div>
    </>
  );
};
