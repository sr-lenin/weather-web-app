require("./style.css");
const { Weather } = require("./weather");
const { UI } = require("./UI");

const weather = new Weather("Santo Domingo", "do");
const ui = new UI();

const fetchweather = async () => {
  const data = await weather.getWeather();
  ui.render(data);
};

document.querySelector("#w-change-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const city = document.querySelector("#city").value;
  const countryCode = document.querySelector("#countryCode").value;
  console.log(city, countryCode);
});

document.addEventListener("DOMContentLoaded", fetchweather);
