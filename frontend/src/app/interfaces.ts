
interface IPlant {
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

interface IUser {
  userId: number;
  authId: string;
  userName: string;
  userEmail: string;
  userPlants: IUserPlants[];
}

interface IUserPlants {
  UserPlantId: number;
  startDate?: Date;
  pictureLink: string;
  user?: IUser;
  plant?: IPlant;
}
