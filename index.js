function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

function showTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;
}

let city = "Sydney";
let apiKey = "dac27f8d3491eb544bc74fd800f1to5c";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric";
axios.get(apiUrl).then(showTemperature);

function displayTemperatureValue(event) {
  event.preventDefault();
  let currentTemperatureValueElement = document.querySelector(
    "#current-temperature-value"
  );
  currentTemperatureValueElement.innerHTML = `${temperature.value}°C`;
}

let displayTemperatureValue = document.querySelector(
  "#displayTemperatureValue"
);
displayTemperatureValue.addEventListener("submit", displayTemperatureValue);
