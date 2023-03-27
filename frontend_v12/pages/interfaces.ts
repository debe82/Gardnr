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
  children?: React.ReactNode;
}


export interface IUser {
  userId: number;
  authId: string;
  userName: string;
  userEmail: string;
  userPlants: IUserPlants[];
  children?: React.ReactNode;
}


export interface IUserPlants {
  UserPlantId: number;
  startDate?: Date;
  pictureLink: string;
  user?: IUser;
  plant?: IPlant;
  children?: React.ReactNode;
}

