'use client'

import AddUpdForm from "@/Component/AddUpdForm";
import Link from "next/link";
import React, { useEffect, useState, SyntheticEvent } from "react";
import { getRats, Rat } from "../api/dataManagenent";

const RatsPage = async () => {
  const rats = await getRats();
  console.log("rats.page.rats: ", rats);
  //const [toggleShowForm, setToggleShowForm] = useState(false);
  let toggleShowForm = false;

  const handleShowForm: React.MouseEventHandler<HTMLButtonElement> | undefined = () => {
    //setToggleShowForm(true);
    toggleShowForm = true;
  }

  return (
    <body>
      <h1> European Rat Repository </h1>
      <h3>List of rescued rats</h3>
      <section className="section-rat">
        <section className="rats-list">
          {rats.map((r: Rat, index: number) => {
            return (
              <>
                <br />
                <Link key={index} className="linkToRats" href={`/rats/${r.id}`}>
                  <button className="btn-rat" key={r.id}>
                    Go to {r.name} page
                  </button>
                </Link>
              </>
            );
          })}

         <section className="rats-addRat">
           <button onClick={handleShowForm}>Add new rat</button>
          </section>
        </section>

        <section className="rats-addRat-form">
          {
            toggleShowForm ? <AddUpdForm /> : null
          }         
        </section>
      </section>

      <footer>
        <section className="section-section-bottom">
          <Link href={`/`}>
            <button className="btn-to-home"> To home page </button>
          </Link>
        </section>
      </footer>
    </body>
  );
};

export default RatsPage;
