const showWateringTime = (startDay: number, startHour: number, timeIncrement: number) =>{

  const nowDay = new Date().getDate();
  const nowHour = new Date().getHours();


  
  let daysLeft = Math.abs(nowDay - (startDay + timeIncrement));//nowDay - startDay;
  let hoursLeft = Math.abs(startHour - nowHour);//nowHour - startHour;
  const timeRemaining = (nowDay - startDay) % timeIncrement;


  if(timeIncrement == 1) {
    daysLeft = 0
    hoursLeft = 23;
  }  
  
  if (daysLeft == timeIncrement) {
    daysLeft -= 1;
  }

if (timeRemaining != 0) {
  daysLeft = timeIncrement - timeRemaining;
  setIsPlantTime(false);
  console.log("isPlantTime?:", isPlantTime)
} else {
  setIsPlantTime(true);
  console.log("isPlantTime?:", isPlantTime)
}

console.log("isPlantTime?:", nowDay, startDay, timeIncrement, timeRemaining);


  if(timeIncrement == 1) {
    daysLeft = 0;
    hoursLeft = 23;
  }  

  if (daysLeft == timeIncrement) {
    daysLeft = daysLeft-1;
  }

  return "" + daysLeft + "d:" + hoursLeft + "h:";
}

export default showWateringTime;