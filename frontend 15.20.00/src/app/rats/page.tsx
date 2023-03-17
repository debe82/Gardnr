

import Link from 'next/link';
import React from 'react';
//import React, { useEffect, useState } from 'react';

import {getRats} from '../api/dataManagenent'

function refresh() {
  window.location.reload();
}

const RatsPage = async () => {
  //refresh();
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
      <button className='btn-to-home'> To home page   </button>
    </Link>
  </>
  )
}

export default RatsPage;