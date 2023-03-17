import Link from 'next/link';
import React from 'react';


const Home = () => {


  return (
    <>
      <header> European Rat Repository </header>
      <p>
        <Link href="/rats">Rescued rats</Link>
      </p>
      <p>
        <Link href="/form">Add rat to db</Link>
      </p>
      <p>
        <Link href="/remove">Remove rat from db</Link>
      </p>      
      <p>
        <Link href="/update">Update rat in db</Link>
      </p>      </>
  )};

  export default Home;