import React, { useContext } from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Context } from "../helpMethods/context";
import UserProfile from '../components/UserProfile';

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
