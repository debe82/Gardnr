import React, { useContext } from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IUser } from '../interfaces';
import { Context, MyContextValue } from '../App';

export default function Userpages() {

  const value = useContext(Context);

  const param = useParams();
  console.log("this is userid", param)
  const [user, setUser] = useState<IUser>();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/users/${param.id}`)
        .then((response) => {
         setUser(response.data);    
        });
      }, []);

      console.log()

  

  
  console.log("this is user data" ,user);   
  console.log()

  return (
  <>
    <p> this is user id:</p>
    {user? (
      user.userId
      ):null 
    };
  
  </>
   
  
    )

}
