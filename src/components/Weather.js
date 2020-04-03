import React from "react";

// to wait until the user interacts with system then these information will appear
// weather__value > white
const Weather = (props) => (

    <div className="weather__info">

        { 
            props.city && 
            props.country && 
                <p className="weather__key">
                    Location: 
                        <tr>
                            <span className="weather__value"> 
                                { props.city }, 
                                { props.country }
                            </span>
                        </tr>
                </p> 
        }

        { 
            props.temperature && 
                <p className="weather__key">
                    Temperature: 
                        <tr>
                            <span className="weather__value"> 
                                { props.temperature } 
                            </span>
                        </tr>
                </p> 
        }

        { 
            props.humidity && 
                <p className="weather__key">
                    Humidity: 
                        <tr>
                            <span className="weather__value"> 
                                { props.humidity } 
                            </span>
                        </tr>
                </p> 
        }

        { 
            props.description && 
                <p className="weather__key">
                    Conditons: 
                        <tr>
                            <span className="weather__value"> 
                                { props.description } 
                            </span>
                        </tr>
                </p> 
        }

        { 
            props.error && 
                <p className="weather__error">
                    { props.error }
                </p> 
        }

    </div>

);

export default Weather;