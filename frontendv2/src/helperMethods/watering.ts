
export const showWateringTime = (stringDate: Date, timeIncrement: number) => {

  const nowDay = new Date().getDate();
  const startDay = new Date(stringDate).getDate();

  const nowHour = new Date().getHours();
  const startHour = new Date(stringDate).getHours();

  let daysLeft = 0;
  let hoursLeft = 0;

  let daysRemaining: number = (nowDay - startDay) % timeIncrement;
  hoursLeft = Math.abs(startHour - nowHour); 

  if (timeIncrement == 1) {
    daysLeft = 0;
  }

  if (timeIncrement == 7) {
    daysLeft = daysRemaining;
    hoursLeft = 23;
  }   

  if (daysRemaining == 0) {
    daysLeft = timeIncrement - 1;
  }

  return [daysLeft, hoursLeft] //;daysLeft + "d: " + hoursLeft +"h";  
};

export const getDayValueForWatering = (timeRemaining: string) => {

  const indexOfQuotes = timeRemaining.indexOf("\"");
  const indexOfColon = timeRemaining.indexOf(":");
  const remainingDays = parseInt(timeRemaining.substring(indexOfQuotes, indexOfColon));

  return remainingDays;
}

export const checkDayTrue = (days: number) => {
  if ( days > 0) return false;
  return true;
}
