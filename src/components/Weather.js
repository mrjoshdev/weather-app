import React from 'react';

const Weather = (props) => {
    return(
      <div className='weather__info'>
      {props.city && props.country && <p>Location: {props.city}, {props.country}</p>
      }
      {props.temperature && <p>Temp: {props.temperature} F</p>
      }
      {props.humidity && <p>Humidity: {props.humidity}</p>
      }
      {props.description && <p>Conditions: {props.description}</p>
      }
      {props.error && <p>{props.error}</p>}
      </div>
    );
};

export default Weather;
