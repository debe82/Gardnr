import axios from "axios";
import React, {
  ChangeEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { addPlant } from "../api/dataManagement";
import { Context } from "../helperMethods/context";
import { IPlant } from "../interfaces";
import "../Addpage.css";


export const SearchBar = () => {
  const { plants, userPlants, setUserPlants, user, setUser } =
    useContext(Context);
  const [search, setSearch] = useState("");
  const params = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/users/${params.id}`).then((response) => {
      setUser(response.data);
    });
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const addUserPlant = (plantname: string) => {
    let plantsToAdd: IPlant[] = plants.filter((p) =>
      p.plantName.includes(plantname)
    );
    addPlant(user.userId , plantsToAdd[0]);
    setUserPlants(JSON.parse(JSON.stringify([...userPlants,plantsToAdd[0]])));
    setSearch("");
    plantsToAdd = [];
    window.location.reload();

  };

  useEffect(() => {}, [search, plants]);

  return (
    <>
      <div className="search-container">
        <div className="search-inner">
          <input
            type="text"
            value={search}
            onChange={onChange}
          />
          <button onClick={() => addUserPlant(search)}>Search</button>
        </div>
        <div className="dropdown">
          {plants
            .filter((e) => {
              const plantNames = e.plantName.toLowerCase();
              if (search === "") {
                return plantNames.startsWith("type here to start searching...");
              } else {
                return plantNames.startsWith(search.toLowerCase());
              }
            })
            .map((e, index: number) => (
              <li className="addlist-item"
                key={index}
                onClick={() => addUserPlant(e.plantName)}>
                {" "}
                {e.plantName}{" "}
              </li>
            ))}
        </div>
      </div>
    </>
  );
};