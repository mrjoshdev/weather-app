import React from 'react';
import '../App.css';
import '../foundation.css';

const Form = props => {
    return(
      <form onSubmit={props.getWeather}>
            <input id='input' type='text' name='cityname' placeholder='City Name or Zipcode...'/>
            <input id='input' type='text' name='country' placeholder='Country ID (US, UK, CN)...'/>
            <button id="search-button" type="submit">Get Weather</button>
      </form>
    );
};

export default Form;
