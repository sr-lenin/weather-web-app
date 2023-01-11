export class Weather {
  constructor(city, countryCode) {
    this.apikey = "6ffd49e7e79cfcb36de7ba4676a3ec21";
    this.city = city;
    this.countryCode = countryCode;
  }

  async getWeather() {
    // es necesario poner la ciudad luegob del igual
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}`;
    const response = await fetch(URI);
    const data = await response.json();
    return data;
  }
}
