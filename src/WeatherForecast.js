import React, {useState, useEffect} from "react";
import WeatherForecastDay from "./forecastDay";
import axios from "axios";
import "./WeatherForecast.css";


export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
      }, [props.coordinates]);
    
    
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
                    {forecast.map(function (dailyForecast, index) {
                    if (index < 5) {
                        return (
                            <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast} />
                            </div>
                        );
                    } else {
                    return null;
                        }
                    })}
        
                </div>
            </div>
         )

    }else{
        load();
        return null;
    }
    
}