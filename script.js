document.addEventListener("DOMContentLoaded", function () {
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
    let day = weekday[currentDay.getDay()];
    return day;
  };
  getCurrentDay();

  // get current month e.g. Jan
  const getCurrentDate = () => {
    var monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    let now = new Date();
    let month = monthNames[now.getMonth()];
    let date = now.getDate();

    // get current time e.g. 12:00
    let hours = now.getHours();
    let mins = now.getMinutes();

    // set am or pm with time
    let period = "AM";
    if (hours > 11) {
      period = "PM";

      // to avoid time in the format of 13:30
      if (hours > 12) {
        hours -= 12;
      }
    }

    // to add zero before minutes like 03
    if (mins < 10) {
      mins = "0" + mins;
    }

    console.log(month + "/" + date);
    return `${month} ${date} | ${hours}:${mins}${period}`;
  };
  getCurrentDate();

  curDate.innerHTML = getCurrentDay() + " | " + getCurrentDate();
});

// main backend with node js
const http = require("http");
const fs = require("fs");
let requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "api.openweathermap.org/data/2.5/weather?q=Lahore&appid=bb97dcf45fb2360d40faab747c1ee7fd"
    )
      .on("data", function (chunk) {
        console.log(chunk);
      })
      .on("end", function (err) {
        if (err) return console.log("connection closed due to errors", err);

        console.log("end");
      });
  } else {
    console.log("File not Found");
    res.end("File not Found");
  }
});
