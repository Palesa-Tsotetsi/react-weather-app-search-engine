import React,{useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props){
    let [city, setCity] = useState(props.defaultCity);
    let [weatherData, setWeatherData] = useState({ready: false});
   

  function handleSubmit(event) {
    event.preventDefault();
    alert("searching...");
    SearchCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function SearchCity(){
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bc5ca568ee2d7c71357ca430a3ff8705&units=metric`;

    axios.get(apiUrl).then(displayData);
  }

  function displayData(response) {
    console.log(response)
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      date:new Date(response.data.dt *1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  
  }
  
    if(weatherData.ready){
    return (
        <div>
          <h1>Weather Search Engine.</h1>

          <form onSubmit={handleSubmit} onChange={updateCity}>
              <input type="text" placeholder="Enter City.." onChange={updateCity} />
              <input type="submit" value="Search" />
          </form>
          <WeatherInfo data={weatherData}/>
        </div>

    );
    }else{
      SearchCity();
      return (`Loading Weather data for ${city} .`)
    }
}