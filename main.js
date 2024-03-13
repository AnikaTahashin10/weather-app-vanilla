const apiKey = "895284fb2d2c50a520ea537456963d9c";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + "&appid=" + apiKey);
  const data = await response.json();
  
  if(response.status == 400) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/cloudy.png";
      } 
      else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
      } 
      else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/sunny.png";
      } 
      else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
      } 
      else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
      }
      else if (data.weather[0].main == "Snow") { 
        weatherIcon.src = "images/snow.png";
      }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/s";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
