import React from 'react';
import '../assets/css/weather.css';

import axios from 'axios';

class Weather extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            data: {},
            position: {},
            country: ''
        };
    }

    componentDidMount() {
        this.getLocation();
        this.getCity();
    }

    getWeather() {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.country}&APPID=10d7d25ccfbedb061beec8dda88ccdd1`;

        axios.get(url)
        .then(response => {
            console.log(response);

            this.setState({
                data: response
            });
        })
        .catch(error => {
            console.log(error)
        });
    }

    getCity() {
        let url = "http://gd.geobytes.com/GetCityDetails";

        axios.get(url)
        .then(response => {
            // console.log(response);

            this.setState({
                country: response.data.geobytescountry
            });

            this.getWeather();
        })
        .catch(error => {
            console.log(error)
        });
    }

    getLocation() {
        let locate = '';

        if (navigator.geolocation) {
            // console.log(navigator.geolocation.getCurrentPosition(this.showPosition));
            locate = navigator.geolocation.getCurrentPosition(this.showPosition);

        } else { 
            locate = 'No Location';
            console.log(locate);
        }
    }

    showPosition(position) {
        console.log(position);
    }

    onCountryChange(event) {
        // console.log(event.target.value);

        this.setState({
            country: event.target.value
        });
    }

    findWeather() {
        console.log(this.state.country);
        this.getWeather();
    }


    render() {
        return(
            <div>
                
                <div className="weather text-center">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12">
                               <h1>Weather</h1>

                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">City Name</label>
                                        <input type="text" class="form-control" placeholder="Pakistan" onChange={(event) => {this.onCountryChange(event)}} />
                                        <small class="form-text text-muted">Just type city name to find the updated weather</small>
                                    </div>
                                    <button type="submit" class="btn btn-primary px-5" onClick={() => {this.findWeather()}}>Find</button>
                                </form>

                                <h2 className="py-5">Country: <b><i>{this.state.country}</i></b></h2>

                                {
                                    this.state.data.data ?
                                    <div className="content">
                                        <div className="section">
                                            <h4>Weather: <span>{this.state.data.data.weather["0"].main}</span></h4>
                                        </div>
                                        <div className="section">
                                            <h4>Temprature: <span>{this.state.data.data.main.temp}</span></h4>
                                        </div>
                                        <div className="section">
                                            <h4>Feels Like: <span>{this.state.data.data.main.feels_like}</span></h4>
                                        </div>
                                        <div className="section">
                                            <h4>Humidity: <span>{this.state.data.data.main.humidity}</span></h4>
                                        </div>
                                        <div className="section">
                                            <h4>Wind Speed: <span>{this.state.data.data.wind.speed}</span></h4>
                                        </div>
                                    </div>
                                :
                                    <h4>Getting Weather ...</h4>
                                }

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    } 
}



export default Weather;