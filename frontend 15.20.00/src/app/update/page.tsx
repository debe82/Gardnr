'use client'

import React, { SyntheticEvent, useEffect, useState } from "react";
import { addRat, getRats, Rat, updateRat } from "@/app/api/dataManagenent";
import Link from "next/link";



const Update = () => {

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");
  const [clinicalStatus, setClinicalStatus] = useState("");
  const [spayed, setSpayed] = useState(false);
  const [city, setCity] = useState("");


  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const listOfRats = await getRats();
    const rat: Rat = listOfRats.filter(r => r.name === name);
    const stringRat = JSON.stringify(rat);

    const colonPositon = stringRat.indexOf(':')+1;
    const commaPosition = stringRat.indexOf(',');
    const id = parseInt(stringRat.substring(colonPositon, commaPosition));
    
    
    const newRat: Rat = {
      id, name, breed, age, sex, clinicalStatus, spayed, city
    }
    updateRat(id, newRat);
    window.location.reload();



  }

/*   useEffect(() => {
    setName("");
    setBreed("");
    setAge(0);
    setSex("");
    setClinicalStatus("");
    setSpayed(false);
    setCity("");
  }) */


  return(
    <>
      <header> European Rat Repository </header>
      <main>
        <form className="upd-rat-form" onSubmit={handleSubmit}>
        <h3>Update Rat details</h3>
          <label>Name</label>
          <input type="text" placeholder="Insert name here.." onChange={(e) => {setName(e.target.value)}}></input>
          <label>Breed</label>
          <input type="text" placeholder="Insert breed here.." onChange={(e) => {setBreed(e.target.value)}}></input>
          <label>Age</label>
          <input type="text" placeholder="Insert age here.." onChange={(e) => {setAge(parseInt(e.target.value))}}></input>
          <label>Sex</label>
          <input type="text" placeholder="Insert sex here.." onChange={(e) => {setSex(e.target.value)}}></input>
          <label>Health status</label>
          <textarea placeholder="Insert health status here.." className="input-health" onChange={(e) => {setClinicalStatus(e.target.value)}}></textarea>
          <label>Spayed</label>
          <input type="checkbox" onChange={(e) => {setSpayed(e.target.checked)}}/>
          <label>City</label>
          <input type="text" placeholder="Insert city here.." onChange={(e) => {setCity(e.target.value)}}></input>
          <button className="btn-upd" type="submit">Update</button>
        </form>
      </main> 

      <Link  href={`/`}> 
        <button className='btn-home'> To home page   </button>
      </Link>

    </>
  )
}

export default Update  