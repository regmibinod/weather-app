const lg = console.log;

const inputBtn = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-btn");
const weatherDetails = document.querySelector("#weather-details");

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

searchBtn.addEventListener("click", () => fetchWeatherInfo());

function fetchWeatherInfo() {
  const userInputValue = document.querySelector("#city-input").value;
  const apiKey = "f9c49bab8db7bb941f3a2124d5be07a5";
  const cityName = userInputValue;

  if (userInputValue) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        lg(data);
        if (data.cod === 200) {
            // weatherDetails.classList.add("weather-container"); 
          weatherDetails.innerHTML = `<h2>${data.name}, <span>${data.sys.country}</span></h2>
        <p><strong>Temperature: </strong> <span>${data.main.temp_min}</span>°C</p>
        <p><strong>Weather: </strong> <span>${data.weather[0].main}</span></p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" />`;
        }else{
        weatherDetails.innerHTML = `<p>City not found. Please try again!</p>`;
        }
      })
      .catch(error=>{
        alert("Error fetching data")
      })
  }
}
