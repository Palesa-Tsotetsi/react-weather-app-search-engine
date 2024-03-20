import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";


export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function day(response){
        let date = new Date(response.data.dt * 1000);
        let day = date.getDay();
        let days= ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
        return days[day];
    }
    
    function handleResponse(response){
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
        
    }

    function load(){
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=bc5ca568ee2d7c71357ca430a3ff8705&units=metric`

        axios.get(apiUrl).then(handleResponse);
        
    }

    if(loaded){
        return(
            <div className="Forecast">
                 <div className="row">
                     <div className="col">
                         <p>{day()}</p>
                         <WeatherIcon code={forecast[0].weather[0].icon} size={36}/>
                         <div className="forecast-temperatures">
                             <span className="max-temperature"> {Math.round(forecast[0].temp.max)}°</span>
                             <span className="min-temperature"> {Math.round(forecast[0].temp.min)}°</span>
                         </div>
                     </div>
     
                 </div>
            </div>
         )

    }else{
        load();
        return null;
    }
    
}