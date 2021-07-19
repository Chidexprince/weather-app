class Fetch {
  async getWeatherDetails(input) {
    const myKey = "2c36818bb5ca9e829313dd736fd15859";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    return data;
  }
}
