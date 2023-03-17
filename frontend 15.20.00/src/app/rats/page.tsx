

import Link from 'next/link';
import React from 'react';
//import React, { useEffect, useState } from 'react';

import {getRats} from '../api/dataManagenent'

const RatsPage = async () => {

  const rats = await getRats();
  
  return (
    <>
      <header> European Rat Repository </header>
      <h1>List of rescued rats</h1>
    <main className='main-rat'>
     <div className='rats-list'>
        {rats.map((r) => {

          return(
            <>
            <br />
            <Link key={r.id} className='linkToRats' href={`/rats/${r.id}`}> 
            <button className='btn-rat' key={r.id}>Go to {r.name} page</button>
            </Link>
          </>  
          );  
        })}
      </div>
      <></>
    </main>
    <Link  href={`/`}> 
      <button className='btn-home'> To home page   </button>
    </Link>
  </>
  )
}

export default RatsPage;