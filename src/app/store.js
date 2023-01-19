export class Store {
  constructor() {
    this.city;
    this.countryCode;
    this.defaulCity = "santo domingo";
    this.defaulCountry = "do";
  }

  setLocationData(city, countryCode) {
    localStorage.setItem("City", city);
    localStorage.setItem("CountryCode", countryCode);
  }

  getLocationData() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaulCity;
    } else {
      this.city = localStorage.getItem("city");
    }
    if (localStorage.getItem("contryCode") === null) {
      this.countryCode = this.defaulCity;
    } else {
      this.countryCode = localStorage.getItem("countryCode");
    }

    return {
      city: this.city,
      countryCode: this.countryCode,
    };
  }
}
