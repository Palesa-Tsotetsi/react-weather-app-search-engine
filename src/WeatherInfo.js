import React from "react";
import FormattedDate from "./FormattedDate";
import "bootstrap/dist/css/bootstrap.css";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return(
        <div className="Weatherinfo">
            <h2 className="text-capitalize">{props.data.city}</h2>

            <ul>
                <li>
                    <FormattedDate date={props.data.date}/>
                </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row">

            <div className="col-6">
                <span className="temp">
                    <WeatherIcon code={props.data.icon} size={52} />
                    <span className="temperature"> {Math.round(props.data.temperature)}</span> 
                    <span className="unit">°C </span>
                </span>
                </div>
            
                <div className="col-6">
                    <div className="humid">
                        Humidity: {props.data.humidity}%  <br></br>
                        Wind Speed: {Math.round(props.data.wind)}km/h
                    </div>
                </div>

              
            </div>
        </div>
        
        )
        }
