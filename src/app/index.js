require("./style.css");
const { Weather } = require("./weather");
const { UI } = require("./UI");
const { Store } = require("./store");

const ui = new UI();
const store = new Store()
const { city, countryCode } = store.getLocationData()
const weather = new Weather(city, countryCode);

const fetchWeather = async () => {
  const data = await weather.getWeather();
  ui.render(data);
};

document.querySelector("#w-change-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const city = document.querySelector("#city").value;
  const countryCode = document.querySelector("#country-code").value;
  weather.changeLocation(city, countryCode);
  store.setLocationData(city, countryCode)
  fetchWeather();
});

document.addEventListener("DOMContentLoaded", fetchWeather);
