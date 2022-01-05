function formatDate(Date){

let hours = currentTime.getHours ();
if (hours < 10) {
    hours = (`0${hours}`);
}
let minutes = currentTime.getMinutes ();
if (minutes < 10) {
    minutes = (`0${minutes}`);
}
let dayIndex = currentTime.getDay ();
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[dayIndex];

return (`${day}  ${hours}:${minutes}`);
} 

let newDate = document.querySelector("#daytime");
let currentTime = new Date ();
newDate.innerHTML = formatDate(currentTime);

function displayWeather(response) {
document.querySelector("#city").innerHTML = response.data.name;
document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
document.querySelector("#humidity").innerHTML = response.data.main.humidity;
document.querySelector("#windspeed").innerHTML = Math.round(response.data.wind.speed);
document.querySelector("#description").innerHTML = response.data.weather[0].description;
}

function searchCity(event) {
    event.preventDefault();
let apiKey = "e68957dd092b69d6f402650ba1584ada";
let cityInput = document.querySelector("#city-input");
let city = cityInput.value;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiURL).then(displayWeather);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);





