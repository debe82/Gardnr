'use client'

import Card from '@/app/components/Card';
import  Carousel  from '@/app/components/Carousel';
import  PlantCard  from '@/app/components/PlantCard';
import UserProfile from '@/app/components/UserProfile';
import Link from 'next/link';
import React from 'react'

const UserPage = ({params}: any) => {
  console.log("user id: ", params);

  //<h1>welcome back, {params}</h1>

  //
  return (
    <div>
      {
        <>
      
      <UserProfile />
      <div></div>
      <Carousel />
      <Card />
      <PlantCard />
      </>
      }
    </div>
  )
}

export default UserPage;
