import React, { useContext } from 'react'
import { Context, MyContextValue } from '../App';

export const SearchBar = () => {

  const {plants, setPlants, userPlants, setUserPlants} = useContext(Context);

  return (
    <div>{plants.map(e => e.description)}</div>
  )
}
