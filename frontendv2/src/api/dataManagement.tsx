import axios from "axios";
import { IPlant, IUser } from "../interfaces";

const PLANTS_API_URL = 'http://localhost:8080/api/plants';
const USER_PLANTS_URL = 'http://localhost:8080/api/userplants';
const USER_URL = 'http://localhost:8080/api/users';
const REMOVE_URL = 'http://localhost:8080/api/userplants';



export const getAllApiPlants =async () => {
  const response = axios.get(PLANTS_API_URL);
  return (await response).data;
}

export const getAllUserPlants =async () => {
  const response = axios.get(USER_PLANTS_URL);
  return (await response).data;
}


export const getUser = async (userId: number) => {
    const response = axios.get(USER_URL + `/${userId}`);
    return (await response).data;
  };

export const removePlant = (id: number)  => {
  axios.delete(REMOVE_URL + `/${id}`);
}

export const addPlant = (id: number, plant: IPlant) => {
  const response = axios.post(`http://localhost:8080/api/users/${id}/plants`,
  {
    plantId: plant.plantId,
    plantName: plant.plantName,
    plantNameLatin: plant.plantNameLatin,
    watering: plant.watering,
    tempMax: plant.tempMax,
    tempMin:  plant.tempMin,
    idealLight: plant.idealLight,
    description: plant.description,
    pictureLink: plant.pictureLink,
  });
}