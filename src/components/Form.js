import React from 'react';
import '../foundation.css';

const Form = props => {
    return(
      <form onSubmit={props.getWeather}>
        <div className="row">
          <div class="small-2 medium-3 large-4 columns">
            <input id='zip' type='text' name='zipcode' placeholder='Zipcode...' inputMode="numeric" maxLength="5" minLength="5"/>
            <button className="button" type="submit">Get Weather</button>
          </div>
        </div>
      </form>
    );
};

export default Form;
