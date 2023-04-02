export const calcWateringTime = (startDay: number, startHour: number, timeIncrement: number) =>{

  const nowDay = new Date().getDate();
  const nowHour = new Date().getHours();
  
  let daysLeft = Math.abs(nowDay - (startDay + timeIncrement));//nowDay - startDay;
  let hoursLeft = Math.abs(startHour - nowHour);//nowHour - startHour;

  if(timeIncrement == 1) {
    daysLeft = 0
    hoursLeft = 23;
  }  
  
  if (daysLeft == timeIncrement) {
    daysLeft -= 1;
  }

  if(timeIncrement == 1) {
    daysLeft = 0;
    hoursLeft = 23;
  }  

  if (daysLeft == timeIncrement) {
    daysLeft = daysLeft-1;
  }

  return "" + daysLeft + "d:" + hoursLeft + "h:";
}
