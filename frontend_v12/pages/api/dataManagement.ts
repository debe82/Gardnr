import axios from "axios";
import { IUser } from "../interfaces";

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

// export const getUser = async (userId: string | string[]) => {
//   const response = await axios.get(`http://localhost:8080/api/users/${userId}`);
//   return response.data;
// };

export async function getUser(userId: string){
  const apiResponse = await fetch(`http://localhost:8080/api/users/${userId}`, { cache: 'no-store' });
  // const apiResponse = await fetch(`/api/employees/${id}`);
  const data = await apiResponse.json();
  //console.log("dataManagement.getRats.ratsData: ", ratsData)
  return data;
};  