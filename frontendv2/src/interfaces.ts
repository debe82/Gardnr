export interface IPlant {
  plantId: number;
  plantName: string;
  plantNameLatin: string;
  watering: string;
  tempMax: string;
  tempMin: string;
  idealLight: string;
  description: string;
  pictureLink: string;
}


export interface IUser {
  userId: number;
  authId: string;
  name: string;
  email: string;
  //plants: IPlant[];
  listOfUserPlants: IUserPlants[];
}


export interface IUserPlants {
  userPlantId: number;
  startDate: Date;
  userPlantName: string;
  user: IUser;
  plant: IPlant;
}
