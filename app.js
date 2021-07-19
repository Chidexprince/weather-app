//inst classes//

const ft = new Fetch();
const ui = new UI();

//add event listeners//

const search = document.getElementById("location-input");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const currentVal = search.value;

  ft.getWeatherDetails(currentVal).then((data) => {
    //call a UI method//
    ui.populateUI(data);
    //call saveToLS
    ui.saveToLS(data);
  });
});

//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {
  const dataSaved = ui.getFromLS();
  ui.populateUI(dataSaved);
});
