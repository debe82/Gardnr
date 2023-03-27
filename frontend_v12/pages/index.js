

import Header  from '../components/Header'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { NextResponse } from 'next/server'


function Home() {
  const router = useRouter();
  const [auth, setAuth] = useState(true);


  // const redirect = () => {
  //   //return NextResponse.redirect('/user/1');
  //   router.push('/user/1');
  // }

  // if (auth) {
  //   redirect();
  // }

  
  return (
    <>
    <div>
      <header >
        <Header />
        <Link href="/user/1">login</Link>
      </header>

      <body>


        <footer>


        </footer>
      </body>
    </div>

    </>
  )
}

export default Home;