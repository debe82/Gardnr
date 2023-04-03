import React from "react";
import { useState } from "react";
import DateTimePicker from "react-datetime-picker";

function Calender() {
  const [value, onChange] = useState(new Date());

  const increment = 7;
  const CurrentDate = new Date().getUTCDay;

  return (
    <div>
      <DateTimePicker
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Calender;
