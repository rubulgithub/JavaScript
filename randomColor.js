// generate a random colour

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervaliId;
const startChangingColor = function () {
  const changeBgColour = function () {
    document.body.style.backgroundColor = randomColor();
  };
  if (!intervaliId) {
    intervaliId = setInterval(changeBgColour, 1000);
  }
};
const stopChangingColor = function () {
  clearInterval(intervaliId);
  intervaliId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
