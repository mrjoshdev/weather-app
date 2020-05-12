import React from 'react';

const Form = props => {
    return(
      <form onSubmit={props.getWeather}>
        <input type='text' maxLength='5' minLength='5' name='zipcode' placeholder='Zipcode...'/>
        <button type="submit">Get Weather</button>
      </form>
    );
};

export default Form;
