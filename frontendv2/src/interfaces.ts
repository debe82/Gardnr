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
  userName: string;
  userEmail: string;
  userPlants: IUserPlants[];
}


export interface IUserPlants {
  UserPlantId: number;
  startDate?: Date;
  pictureLink: string;
  user?: IUser;
  plant?: IPlant;
}