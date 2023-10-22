const apikey = "eb76c15ab1403c719eab62b0c696b950";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherImage = document.querySelector(".weather-icon");
let currentWeather = async (city) => {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".details").style.display = "none";
  } else {
    let data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + `°C`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
    document.querySelector(".wind").innerHTML = data.wind.speed + ` km/h`;
    if (data.weather[0].main == "Clouds") {
      weatherImage.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherImage.src = "./images/Clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherImage.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherImage.src = "./images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherImage.src = "./images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherImage.src = "./images/snow.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".details").style.display = "flex";
  }
};

searchButton.addEventListener("click", () => {
  currentWeather(searchBox.value);
});
