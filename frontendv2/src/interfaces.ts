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
  userPassword: string;
  userName: string;
  userEmail: string;
  //plants: IPlant[];
  listOfUserPlants: IUserPlants[];
}


export interface IUserPlants {
  userPlantId: number;
  startDate: Date;
  userPlantName: string;
  timeIncrement: number;
  user: IUser;
  plant: IPlant;
}

export interface IUserLogin {
  userEmail: string;
  userPassword: string;
}

export interface IUserRegister {
  userName: string;
  userEmail: string;
  userPassword: string;
}
