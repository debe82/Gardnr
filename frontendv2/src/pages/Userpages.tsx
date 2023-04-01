import React, { useContext } from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IUser } from '../interfaces';
import { Context, MyContextValue } from '../App';
import UserProfile from '../components/UserProfile';
import { getUser } from '../api/dataManagement';
import { useAuth0 } from '@auth0/auth0-react';

export default function Userpages() {

  const {
    plants,
    setPlants,
    userPlants,
    setUserPlants,
    user,
    setUser,
  } = useContext(Context);
  
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const param = useParams();

    useEffect(() => {
        getAccessTokenSilently().then(token => {
          console.log("token: ", token)
          fetch(`http://localhost:8080/api/users/${user.userId}`, { 
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(res => res.json())
          .then(data => setUser(data))
          .catch(err => console.log("error getching plants: ",err));
        })
    
      }, []);

  return (
  <>
    <UserProfile />

  </>
   
  
    )

}
