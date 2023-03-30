import React, { useContext } from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IUser } from '../interfaces';
import { Context, MyContextValue } from '../App';
import UserProfile from '../components/UserProfile';
import { getUser } from '../api/dataManagement';

export default function Userpages() {

  const {
    plants,
    setPlants,
    userPlants,
    setUserPlants,
    user,
    setUser,
  } = useContext(Context);

  const param = useParams();
  //console.log("this is userid", param)

    useEffect(() => {
        axios.get(`http://localhost:8080/api/users/${param.id}`)
        .then((response) => {
         setUser(response.data);    
        });

      }, []);

  return (
  <>
    <UserProfile />
  
  </>
   
  
    )

}
