import React from 'react';
import '../App.css';
import '../foundation.css';

const Form = props => {
    return(
      <form onSubmit={props.getWeather}>
            <input id='zip' type='text' name='zipcode' placeholder='Zipcode...'/>
            <button id="search-button" type="submit">Get Weather</button>
      </form>
    );
};

export default Form;
