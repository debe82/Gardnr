import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { CarouselPlants } from '../../components/CarouselPlants';
import UserProfile from '../../components/UserProfile';
import { PlantCard } from '../../components/PlantCard';
import SpecificPlantCard from '../../components/SpecificPlantCard';
import Header from '../../components/Header';
import { getUser } from '../api/dataManagement';

export const UserPage = () => {
  const router = useRouter();

  const [userPlants, setUserPlants] = useState([]);  
  const { id } = router.query;

  const user = getUser(id);

  //authId = vbvfskjdfh47ui564fgbdk5iit
  return (
    <>
      <Header />
      <div>page for user {id}</div>
      <CarouselPlants />
      <UserProfile />
    </>
  )
}

export default UserPage;
