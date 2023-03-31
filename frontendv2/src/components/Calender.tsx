import React from 'react'
import { useState } from 'react';


function Calender() {
   

      const [value, onChange] = useState(new Date());
      console.log(value)


      const increment = 7; 
      const CurrentDate =  new Date().getUTCDay
      console.log( "this is the currentdate", CurrentDate)

    
    
      return (
        <div>

        </div>
      );
}

export default Calender