import React, { Component } from 'react';
import './sass/app.scss';

import './foundation/foundation.css';
import './foundation/foundation-float.css';
import './background-images.css'
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import './background-images.css';
import './img/logo.png';

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    id: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const zipcode = e.target.elements.cityname.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},US&APPID=${REACT_APP_API_KEY}&units=imperial`)
    const url = "http://openweathermap.org/img/wn/"

    const data = await api_call.json();
    if (zipcode && data["cod"] !== "404" ) {
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon: url + data.weather[0].icon + "@2x.png",
      id: data.weather[0].id,
      error: ""
    });
  } else {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      icon: undefined,
      id: undefined,
      error: "Please enter a valid five digit US zipcode."
    })
  }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="row">
            <div className="small-8 medium-6 large-6 columns">
              <span>
                <Titles />
                <Form getWeather={this.getWeather}/>
              </span>
            </div>
              <div className="small-2 medium-6 large-6 columns">
                <span>
                  <div className="logo">
                  </div>
                </span>
              </div>
          </div>
        </div>

        <div className={this.state.description}>
          <div className="row layer">
            <div className="weather-block small-12 large-12 columns">
              <span>
                  <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                  />
              </span>
            </div>
            <div className="icon-block small-2 large-2 columns">
              <Weather
                icon={this.state.icon}
                id={this.state.id}
              />
            </div>
          </div>
        </div>

      </div>
    );
  }
};

export default App;
