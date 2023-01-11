require("./style.css");
const {Weather} = require('./weather')
const weather = new Weather('Santo Domingo', 'do')

 const fetchweather = async() => {
    const data = await weather.getWeather()
    console.log(data);
};

document.addEventListener("DOMContentLoaded", fetchweather);
