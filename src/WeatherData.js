import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherData(props){
    return(
        <div>
            <h2>{props.data.city}</h2>

            <ul>
                <li>
                    <FormattedDate date={props.data.date}/>
                </li>
                <li>{props.data.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    Humidity: {humidity}%
                    Wind Speed: {Math.round(wind)}km/h
                </div>

                <div className="col-6">
                    <span className="temperature">Temperature : {Math.round(temperature)}</span>
                    <span className="unit">°C </span>
                    {icon && (
                        <img
                        src={props.data.icon}
                        alt={props.data.description}
                        />
                    )}
                </div>
            
            </div>
        </div>
    )
}