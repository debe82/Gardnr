import Link from 'next/link';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
const Home = () => {


  return (
    <>

    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>    

    <head>
      <title>ERR</title>
    </head>

      <body className='body-home'>
        <h1>European Rat Repository</h1>
        <section className='main-containere-section-outer'>

          <section className='main-container-section-left'>
            <Link className='left-link' href="/">News</Link>
            <Link className='left-link' href="/rats">Rescued Rats</Link>
            <Link className='left-link' href="/">Random Stuff</Link>          
          </section>
          <section className='main-container-section-center'>

          </section>
          <section className='main-container-section-right'>
            <Link className='right-link' href="/add">Stuff on the right 1</Link>
            <Link className='right-link' href="/rats">Stuff on the right 2</Link>
            <Link className='right-link' href="/add">Stuff on the right 3</Link>          
          </section>
        </section>

      </body>  
        <footer className='footer-home'>Contacts:
          <section>
            <label>Email: erp@gmail.com</label>
            <br />
            <label>Phone: (+46)(0)1234567</label>          
          </section>
        </footer>
     </>   
  )};

  export default Home;