import React from 'react'
import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

function Calender() {
   

      const [value, onChange] = useState(new Date());
      console.log(value)


      const increment = 7; 
      const CurrentDate =  new Date().getUTCDay
      console.log( "this is the currentdate", CurrentDate)

    
    
      return (
        <div>
          <DateTimePicker onChange={onChange} value={value} />
        </div>
      );
}

export default Calender