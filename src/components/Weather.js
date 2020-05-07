import React from 'react';
import '../assets/css/weather.css';

import axios from 'axios';

class Weather extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            data: {},
            position: {},
            city: ''
        };
    }

    componentDidMount() {
        this.getLocation();
        // this.getCity();
    }

    getCity() {
        let url = "http://gd.geobytes.com/GetCityDetails";

        axios.get(url)
        .then(response => {
            // console.log(response);

            this.setState({
                city: response.data.geobytescountry
            });
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