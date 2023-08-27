let curDate = document.getElementById("date");
let weathercon = document.getElementById("weathercon");
let temStatus = "Clouds";

// get current day e.g. Sunday
const getCurrentDay = () => {
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  let currentDay = new Date();
  console.log(weekday[currentDay.getDay()]);
};
getCurrentDay();
