class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "London";
  }

  populateUI(data) {

    //add them to inner HTML

    this.uiContainer.innerHTML = `
        <h1>
          Weather Report for ${data.name}
        </h1>
    
        <div id="info">
          <h2 id="loc"></h2>
    
          <div class="ctrl">
            <p id="temp">${data.main.temp}</p>
            <p>°</p>
            <div id="deg">
              <span id="c" class="cur">C</span>
            </div>
          </div>
    
          <div class="add">
            <p>
              <b>Low</b>: <span id="low">${data.main.temp_min} °C</span>
            </p>
    
            <p>
              <b>High</b>: <span id="high">${data.main.temp_max} °C</span>
            </p>
          </div>
        </div>
    
        <div id="weather">
          <div class="icon-wrap">
            <img id="icon" />
            <h2 id="main">Weather conditions</h2>
          </div>
    
          <div class="add">
            <p>
              <b>Wind</b>: <span id="wind">${data.wind.speed} mph</span>
            </p>
    
            <p id="desc">${data.weather[0].description}</p>
    
            <p>
              <b>Humidity</b>: <span id="humidity">${data.main.humidity} %</span>
            </p>
          </div>
        </div>
        
        
        `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}
