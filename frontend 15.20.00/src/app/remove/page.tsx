'use client'

import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { addRat, Rat, getRat, getRats, removeRat } from "@/app/api/dataManagenent";
import Link from "next/link";



const Form = () => {

  const [name, setName] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);


  const deleteHandler = async (e: SyntheticEvent) => {
    e.preventDefault();

    const ratList = await getRats();
    const rat: Rat = ratList.filter(r => r.name === name)
    const stringRat = JSON.stringify(rat);

    const colonPositon = stringRat.indexOf(':')+1;
    const commaPosition = stringRat.indexOf(',');
    const id = parseInt(stringRat.substring(colonPositon, commaPosition));
    
    removeRat(id);
    window.location.reload();

  }



  return(
    <>
      <header> European Rat Repository </header>
      <main>
        <form className="rem-rat-form" onSubmit={deleteHandler}>
        <h3>Remove rat from db</h3>
          <label>Name</label>
          <input type="text" placeholder="Insert name here.." onChange={(e) => {setName(e.target.value)}}></input>
          <button className="btn-rem" type="submit">Remove</button>
        </form>
      </main> 
      <br/>
      <div className="div-bottom">
        <Link  href={`/`}> 
          <button className='btn-to-home'> To home page   </button>
        </Link>
      </div>
    </>
  )
}

export default Form  