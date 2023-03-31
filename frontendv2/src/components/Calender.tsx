import React from "react";
import { useState } from "react";

function Calender() {
  const [value, onChange] = useState(new Date());

  const increment = 7;
  const CurrentDate = new Date().getUTCDay;

  return (
    <div>
    </div>
  );
}

export default Calender;