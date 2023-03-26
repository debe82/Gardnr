import axios from "axios";

const PLANTS_API_URL = 'http://localhost:8080/api/plants';
const USER_PLANTS_URL = 'http://localhost:8080/api/userplants';


export const getAllApiPlants =async () => {
  const response = axios.get(PLANTS_API_URL);
  return (await response).data;
}

export const getAllUserPlants =async () => {
  const response = axios.get(USER_PLANTS_URL);
  return (await response).data;
}


export const getUser = async (userId: number) => {
    const response = axios.get( `http://localhost:3001/users/${userId}`);
    return (await response).data;
  };