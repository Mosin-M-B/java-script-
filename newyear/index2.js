//veriables 
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let happy = document.getElementById("happy");
//function
setInterval(() => {
  let currentTime = new Date();
  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
  h = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  m = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  s = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
  if (h == 0 && m >= 0 && s >= 0) {
  // if (h == 23 && m >= 55 && s >= 0) {
      happy.style.display = "block";
  } else {
    happy.style.display = "none";
  }
}, 900);
