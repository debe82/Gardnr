import Link from "next/link";
import React from "react";
//import React, { useEffect, useState } from 'react';
//import { useRouter } from 'next/router';

import { getRats, Rat } from "../api/dataManagenent";

const RatsPage = async () => {
  // const router = useRouter();
  // const refreshData = () => {
  //   router.replace(router.asPath);
  // }
  const rats = await getRats();

  return (
    <>
      <header> European Rat Repository </header>
      <h1>List of rescued rats</h1>
      <main className="main-rat">
        <div className="rats-list">
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
        </div>
        <></>
      </main>
      <section className="section-main-bottom">
        <Link href={`/`}>
          <button className="btn-to-home"> To home page </button>
        </Link>
        <Link href={`/add`}>
          <button className="btn-to-home"> Add rat </button>
        </Link>
        <Link href={`/update`}>
          <button className="btn-to-home"> Update rat </button>
        </Link>       
        <Link href={`/remove`}>
          <button className="btn-to-home"> Remove rat </button>
        </Link>
      </section>
    </>
  );
};

export default RatsPage;
