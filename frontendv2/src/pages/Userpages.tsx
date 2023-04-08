import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../helperMethods/context";
import UserProfile from "../components/UserProfile";

export default function Userpages() {
  const { setUser } =
    useContext(Context);

  const param = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users/${param.id}`)
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  return (
    <>
      <UserProfile />
    </>
  );
}
