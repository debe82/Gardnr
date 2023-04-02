import React from 'react'
import { IUser } from '../interfaces';
import { Collapse } from 'react-bootstrap';

export const getUserFromString = (body: JSON) => {
  //const user: IUser = body;

  // const splitBody = body.split(",");
  // let colonPosition = splitBody[0].indexOf(":");
  // const id = parseInt(splitBody[0].substring(colonPosition));
  // console.log("id: " + id);
  // colonPosition = splitBody[1].indexOf(":");
  // const auth = splitBody[1].substring(colonPosition);
  // colonPosition = splitBody[2].indexOf(":");
  // const userName = splitBody[2].substring(colonPosition);
  // colonPosition = splitBody[3].indexOf(":");
  // const userEmail = splitBody[3].substring(colonPosition);

  // const user: IUser = {
  //   userId: id,
  //   authId: auth,
  //   name: userName,
  //   email: userEmail,
  //   listOfUserPlants: []
  // };


  /*
userId":6
"authId":"[QnI29kMHbukPpYnxyTSCNB1Pzczax3Ct]"
"userName":"Marco Debernardi"
"userEmail":"marco.debernardi@appliedtechnology.se"
"userPlants":[]
  */
  
  //return user;
}
