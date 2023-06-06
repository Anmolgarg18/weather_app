const inputBox =document.querySelector('.input-box');
const searchBtn = document.querySelector('#srchBtn');
const weather_img =document.querySelector('.weather-img');
const temperature =document.querySelector('.temperature');
const description =document.querySelector('.description');
const humidity =document.getElementById('humidity');
const wind_speed =document.getElementById('wind-speed');
const location_not =document.querySelector('.location_not');
const weather_body =document.querySelector('.weather-body');



if (searchBtn) {
    searchBtn.addEventListener('click',()=>{
      checkweather(inputBox.value); 
    });
  }




async function checkweather(city)
{
  
const api_key="2d099418d8aba3be2ff613d92e38f42c";
const url=   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

try {
  const weather_data = await fetch(`${url}`).then(response => response.json());
} catch (error) {
  console.log(error);
}
const weather_data = await fetch(`${url}`).then(response => response.json());

if(weather_data.cod === `404`)
{
  location_not.style.display="flex";
  weather_body.style.display="none";
  return;
}
location_not.style.display="none";
weather_body.style.display="flex";
temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`; 

description.innerHTML=`${weather_data.weather[0].description}`;

humidity.innerHTML =`${weather_data.main.humidity}%`;

wind_speed.innerHTML =`${weather_data.wind.speed}km/h`;

switch(weather_data.weather[0].main)
{
  case 'Clouds':
    weather_img.src="D:/vscode/.vscode/weather/assets/cloud.png";
    case 'Clear':
    weather_img.src="D:/vscode/.vscode/weather/assets/clear.png";
    break;
    case 'Mist':
    weather_img.src="D:/vscode/.vscode/weather/assets/mist.png";
    break;
    case 'Rain':
    weather_img.src="D:/vscode/.vscode/weather/assets/rain.png";
    break;
    case 'Snow':
    weather_img.src="D:/vscode/.vscode/weather/assets/snow.png";
    break;
}
console.log(weather_data);
}