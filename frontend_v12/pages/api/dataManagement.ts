import axios from "axios";

const PLANTS_API_URL = 'http://localhost:8080/api/plants';
const USER_PLANTS_URL = 'http://localhost:8080/api/userplants';
const USER_URL = 'http://localhost:8080/api/user'

export const getAllApiPlants = async () => {
  const response = axios.get(PLANTS_API_URL);
  return (await response).data;
}

export const getAllUserPlants = async () => {
  const response = axios.get(USER_PLANTS_URL);
  return (await response).data;
}

export const getUser = async (userId: string | string[]) => {
  const response =   axios.get(`http://localhost:8080/api/users/${userId}`);
  return (await response).data;
  };