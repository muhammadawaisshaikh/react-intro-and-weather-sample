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


    render() {
        return(
            <div>
                
                <div className="weather">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12">
                               <h1>Weather</h1>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    } 
}



export default Weather;