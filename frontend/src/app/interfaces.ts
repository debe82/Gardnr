
interface IPlant {
  plantId: number;
  plantName: string;
  plantNameLatin: string;
  watering: string;
  tempMax: string;
  tempMin: string;
  idealLight: string;
  description: string;
  startDate?: Date;
  pictureLink: string;
}

interface IUser {
  userId: number;
  authId: string;
  userName: string;
  userEmail: string;
  userPlants: IUserPlants[];
}

interface IUserPlants {
  plantId: number;
  plantName: string;
  plantNameLatin: string;
  watering: string;
  tempMax: string;
  tempMin: string;
  idealLight: string;
  description: string;
  startDate?: Date;
  pictureLink: string;
  user?: IUser;
}
