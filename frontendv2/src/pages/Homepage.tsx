import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import { useCookies } from 'react-cookie';
import { Button, Container } from "react-bootstrap";
import Userpages from "./Userpages";
import { Context } from "../helpMethods/context";




function Homepage() {

  const {
    user,
    setUser,
  } = useContext(Context);

  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const [cookies] = useCookies(['XSRF-TOKEN']);


  useEffect(() => {
    setLoading(true);
    fetch('/api/users', { credentials: 'include' })
      .then(response => response.text())
      .then(body => {
        if (body === '') {
          console.log("in fetch 1")
          setAuthenticated(false);
        } else {
          console.log("this is the respons body",body)
          console.log("in fetch else")
          setUser(JSON.parse(body));
          console.log("this is the respons user", user)
          setAuthenticated(true);
        }
        setLoading(false);
      });
  }, [setAuthenticated, setLoading, setUser
  ])


  const login = () => {
    let port = (window.location.port ? ':' + window.location.port : '');
    if (port === ':3000') {
      port = ':8080';
    }
    // redirect to a protected URL to trigger authentication
    window.location.href = `//localhost:8080/api/plants`;
  }

  const logout = () => {
    setAuthenticated(false)

    fetch('/api/logout', {
      method: 'POST', credentials: 'include',
      headers: { 'X-XSRF-TOKEN': cookies['XSRF-TOKEN'] }
    })
      .then(res => res.json())
      .then(response => {
        window.location.href = `${response.logoutUrl}?id_token_hint=${response.idToken}`
          + `&post_logout_redirect_uri=${window.location.origin}`;
      });
  }

  //  const message = user ?
  //    <h2>Welcome !</h2> :
  //    <p>Log in.</p>;

  const button = authenticated ?
    <div>
      <Userpages/> 
      <br/>
      <Button onClick={logout}>Logout</Button>
    </div> :
    <Button onClick={login}>Login</Button>;

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Container fluid>
        {authenticated ?
    <div>
      <Userpages/> 
      <br/>
      <Button onClick={logout}>Logout</Button>
    </div> :
    <Button onClick={login}>Login</Button>}
      </Container>
    </div>
  );
}

export default Homepage;