// import axios from 'axios';
// import React, { SyntheticEvent, useContext, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { Context } from '../App';



// export const LoginForm = () => {

//     const [userName, setUserName] = useState("");
//     const [userpassword, serUserPassword] = useState("");

  
//     const handleSubmit = (e: SyntheticEvent) => {
//       e.preventDefault();
//       console.log(userName)
//       axios.post("/api/", {
//         userName: userName,
//         userpassword: userpassword
//       });
//     };
  
//     return ( 
//       <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input id="usernameInput" type="text" onChange={(e) => setUserName(e.target.value)}/>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )}
