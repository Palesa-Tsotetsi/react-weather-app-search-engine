import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props){
    return(
        <div>
            <h2 className="text-capitalize">{props.data.city}</h2>

            <ul>
                <li>
                    <FormattedDate date={props.data.date}/>
                </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row">

            <div className="col-6">
                    <span className="temperature"> {Math.round(props.data.temperature)}</span>
                    <span className="unit">°C </span>
                    
                        <img
                        src={props.data.icon}
                        alt={props.data.description}
                        />
        
                </div>
            
                <div className="col-6">
                    Humidity: {props.data.humidity}%
                    Wind Speed: {Math.round(props.data.wind)}km/h
                </div>

              
            </div>
        </div>
    )
}