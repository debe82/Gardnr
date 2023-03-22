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

  const [inputName, setInputName] = useState("");  

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const ratsResponse = await getRats();
    const updatedRat: Rat = ratsResponse.filter((u: { name: string; })  => u.name === inputName);

    setName(updatedRat.name);
    setAge(updatedRat.age);
    setBreed(updatedRat.breed);
    setClinicalStatus(updatedRat.clinicalStatus);
    setSex(updatedRat.sex);
    setSpayed(updatedRat.spayed);

    if(updateRat == null){
      alert("Rat NotFound");
    }
    const stringRat = JSON.stringify(updatedRat);

    const colonPositon = stringRat.indexOf(':')+1;
    const commaPosition = stringRat.indexOf(',');
    const id = parseInt(stringRat.substring(colonPositon, commaPosition));
    console.log("id: ", id);
    
    const newRat: Rat = {
      name, breed, age, sex, clinicalStatus, spayed, city
    }
    updateRat(id, newRat);
    window.location.reload();
  }

   const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputName(e.target.value)

    


   }

  return(
    <>
      <header>European Rat Repository</header>
      <main>
        <section>
          <label>Rat to Search</label>
          <input placeholder="enter name here..." onChange={handleChange}></input>
          <button>Search</button>
        </section>
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
      <div className="div-bottom">
        <Link  href={`/`}> 
          <button className='btn-to-home'> To home page   </button>
        </Link>
      </div>
    </>
  )
}

export default Update  