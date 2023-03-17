import { getRat } from "@/app/api/dataManagenent";
import Update from "@/app/update/page";
import Link from "next/link";

const ratsDetail = async ({params}: any) => {

  const rat = await getRat(params.id);


  return (
    <div>
      <h1>Rat Details for {rat.name} </h1>
      <article>
        <li key={rat.name}>Name: {rat.name}</li>
        <li key={rat.age}>Age: {rat.age}</li>
        <li key={rat.breed}>Breed: {rat.breed}</li>
        <li key={rat.sex}>Sex: {rat.sex}</li>
        <li key={rat.clinicalStatus}>Health status: {rat.clinicalStatus} </li>
        <li key="spayed">Spayed: {String(rat.spayed)}</li>
        <li key={rat.city}>City: {rat.city}</li>
      </article>
      <br/>
      <p>
        <Link  href={`/rats`}> 
          <button className='btn-list'>Go to rat list</button>
        </Link>
      </p>    
    </div>  
  );
};

export default ratsDetail;