import React, { ChangeEvent, SyntheticEvent, useContext, useState } from 'react'
import { Button, Dropdown, Form, InputGroup } from 'react-bootstrap';
import { Context, MyContextValue } from '../App';

export const SearchBar = () => {

  const {plants, setPlants, userPlants, setUserPlants} = useContext(Context);
  const[search, setSearch] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement> ) => {
    setSearch(e.target.value)
  } 

userPlants.map(e => console.log( "this is a plantname", e.UserPlantId));

  const onSearch  = (plantname: string) => {
    plants.map(e => console.log(e.plantName));
    console.log("search" , plantname);  
  }


  return (
    <>
    <div className='search-container'> 
    <div className='search-inner'>
      <input type="text" value={search} onChange={onChange}/>
      <button onClick={() => onSearch(search)}>Search</button>
    </div>
    <div className='dropdown'>
  
      {plants.filter(e => {
      const plantNames = e.plantName.toLowerCase();
      return plantNames.startsWith(search.toLowerCase())
})
      .map((e) => <li onClick={() => onSearch(e.plantName)}> {e.plantName} </li>)}
    </div>
    </div>
    <div>{plants.map(e => e.description)}</div>
    </>
  )
}
