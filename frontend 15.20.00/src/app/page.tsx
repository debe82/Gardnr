import Link from 'next/link';
import React from 'react';


const Home = () => {


  return (
    <>
      <header> European Rat Repository </header>
      <main className='main-home'>
        <Link href="/rats">
          <button className='btn-home'>Rescued rats</button>
        </Link>
        <Link href="/form">
          <button className='btn-home'>Add rat to db</button>
        </Link>
        <Link href="/remove">
          <button className='btn-home'>Remove rat from db</button>
        </Link>
        <Link href="/update">
        < button className='btn-home'>Update rat in db</button>
        </Link>
      </main>  
        <footer>Contacts:
          <br /> <br />
          <label>Email: erp@gmail.com</label>
          <br />
          <label>Phone: (+46)(0)1234567</label>
        </footer>
     </>   
  )};

  export default Home;