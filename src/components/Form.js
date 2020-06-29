import React from 'react';

const Form = props => {
    return(
      <form onSubmit={props.getWeather}>
            <input id='input' type='text' name='cityname' pattern='[0-9]*' placeholder='Zipcode...' />
            <button id="search-button" type="submit">Get Weather</button>
      </form>
    );
};

export default Form;
