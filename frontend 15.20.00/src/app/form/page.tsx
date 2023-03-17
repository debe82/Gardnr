'use client'

import React, { SyntheticEvent, useEffect, useState } from "react";
import { addRat, Rat } from "@/app/api/dataManagenent";
import Link from "next/link";



const Form = () => {

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");
  const [clinicalStatus, setClinicalStatus] = useState("");
  const [spayed, setSpayed] = useState(false);
  const [city, setCity] = useState("");


  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const id = Math.floor(Math.random()*10)+1;
    const newRat: Rat = {
      id, name, breed, age, sex, clinicalStatus, spayed, city
    }
    addRat(newRat);
    window.location.reload();
 // useEffect(()=>{})

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
      <main className="main-add">
        <form className="add-rat-form" onSubmit={handleSubmit}>
        <h3>Submit new Rat</h3>
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
          <button className="btn-submit" type="submit">Submit</button>
        </form>
      </main> 
      <div className="div-bottom">
        <Link  href={`/`}> 
          <button className='btn-home'> To home page   </button>
        </Link>
      </div>
    </>
  )
}

export default Form  