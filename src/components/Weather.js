import React from 'react';
import '../foundation.css';
import '../App.css';


const Weather = (props) => {
    return(
      <div className="weather">
      {props.city && props.country && <div id="city"> <p>{props.city}</p> </div>}
      {props.description && <p>{props.description}</p>}
      {props.temperature && <div Id="temp"> <p>{Math.round(props.temperature)} °F</p></div>}
      {props.humidity && <p>{props.humidity}% Humidity</p>}
      {props.error && <p>{props.error}</p>}
      </div>
    );
};

export default Weather;

//{props.icon && <p>Icon: <img src={props.icon} alt="icon"/> </p>}
//{props.id && <p>Id: {props.id} </p>}
