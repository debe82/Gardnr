"use client"

import SpecificPlantCard from '@/app/components/SpecificPlantCard';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'

interface pageProps{
  params: {id: number}
}

const page: FC<pageProps> = ({params}) => {
  const USER_URL=`http://localhost:8080/api/users/${params.id}`;
  const [user, setUser] = useState<IUser>()

 useEffect(() => {
    axios.get(USER_URL).then((response) => {
      setUser(response.data);
      console.log("this is de response data ", response.data);
    });
  }, []);


  return <><p>welcome, {user?.userName}</p>
  <SpecificPlantCard /> 
  </>

}

export default page
