import React, { Component } from 'react';
import './App.css';
import './foundation.css';
import './foundation-float.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined
  }

  /*this.icon = {
    Thunderstorm: "wi-hunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
  };*/

  getWeather = async (e) => {
    e.preventDefault();
    const zipcode = e.target.elements.zipcode.value;
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
      error: "Please enter a correct zipcode"
    })
  }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="row">
            <div className="medium-8 large-8 columns">
              <Titles />
              <Form getWeather={this.getWeather}/>
            </div>
          </div>
        </div>
        <body>
          <div class="row">
            <div class="weather-block small-6 large-6 columns">
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
            <div class="icon-block small-2 large-2 columns">
              <Weather
              icon={this.state.icon}
              />
            </div>
            <div class="icon-block small-2 large-2 columns">
              <Weather
              icon={this.state.icon}
              />
            </div>
            <div class="icon-block small-2 large-2 columns">
              <Weather
              icon={this.state.icon}
              />
            </div>
          </div>
        </body>
      </div>
    );
  }
};

/*{<div className="App">
  <div className="App-header">
    <Titles />
    <Form getWeather={this.getWeather}/>
    <Weather
    temperature={this.state.temperature}
    city={this.state.city}
    country={this.state.country}
    humidity={this.state.humidity}
    description={this.state.description}
    error={this.state.error}
    />
  </div>
</div>}*/

export default App;
