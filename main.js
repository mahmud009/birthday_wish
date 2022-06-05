function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
  var balloonContainer = document.getElementById("balloon-container");
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

let wrapper = document.querySelector(".wrapper");
let trigger = document.getElementById("trigger");
let content = document.querySelector(".image-container");

trigger.onclick = function () {
  wrapper.classList.add("wrapper-light");
  let audio = new Audio("./audio/birthday_music2.mp3");
  audio.play();
  this.classList.add("hidden");
  content.classList.add("content-animated");
  createBalloons(100);
};

// window.onload = function () {
//   createBalloons(100);
// };
