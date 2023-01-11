export class UI {
  constructor() {
    this.location = document.querySelector("#weather-location");
    this.desc = document.querySelector("#weather-description");
    this.string = document.querySelector("#weather-string");
    this.humidity = document.querySelector("#weather-humidity");
    this.wind = document.querySelector("#weather-wind");
  }

  render(weather) {
    this.location.textContent = weather.name + " / " + weather.sys.country;
    this.desc.textContent = weather.weather[0]["description"];
    const celcius = weather.main.temp - 272.15;
    this.string.textContent = celcius.toFixed(2) + "°C";
    this.humidity.textContent = "humidity" + weather.main.humidity + "%";
    console.log(weather);
    this.wind.textContent = "wind" + weather.wind.speed + "m/s";
  }

  changeLocation(city, countryCode) {
    this.city = city
    this.countryCode = countryCode
  }
}
