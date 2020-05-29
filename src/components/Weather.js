import React from 'react';
import '../foundation.css';
import '../App.css';
import favicon from '../favicon.png';


const Weather = (props) => {
    return(
      <div>
      {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
      {props.temperature && <p>Temp: {Math.round(props.temperature)} F</p>}
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      {props.description && <p>Conditions: {props.description}</p>}
      {props.icon && <p>Icon: <img src={props.icon}/> </p>}
      {props.error && <p>{props.error}</p>}
      </div>
    );
};

export default Weather;
