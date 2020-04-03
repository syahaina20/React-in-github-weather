import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

// go to the openweathermap.org website > User settings > API keys
const API_KEY = "1758a54807c381448fdbe527f39464cf";

class App extends React.Component {

  state = {  // state is an object that lives within a component and it's responsible for keeping track of changing data within a component. so, it could be the result of the user interaction  
    city: undefined, 
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (a) => {
    
    a.preventDefault(); // to prevent full page refresh
    const city = a.target.elements.city.value;
    const country = a.target.elements.country.value;
    // `` is used to inject the variables that we've defined within our files
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&unites=metric`); // makes HTTP calls and makes web requests easy  
    const data = await api_call.json(); // whatever we get back from this API is going to get converted to days on with this method
    
    if (city && country) { // if city's value has been answered so if this returns correct then ...
    // console.log(data);
    // set the values of those states
    this.setState( {
      // get from console
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    } );
  } else {
    this.setState( {
      city: undefined,
      country: undefined,
      temperature: undefined,
      humidity: undefined,
      description: undefined,
      error: "Please enter the value."
    } );
  }
  }

  // put the titles component on the left hand side, give it a width of 5 columns and on the right hand side, i want the form and the weather component and give that a width of 7 columns 
  render() {
    return (

      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">

                {/* //5 of the 12 columns */}
                <div className="col-xs-5 title-container"> 
                  <Titles />
                </div>

                  <div className="col-xs-7 form-container">
                    <Form getWeather={this.getWeather}/>
                      {/* display  */}
                      <Weather 
                        city={this.state.city}
                        country={this.state.country}
                        temperature={this.state.temperature}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error}
                      />
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
};

export default App;

