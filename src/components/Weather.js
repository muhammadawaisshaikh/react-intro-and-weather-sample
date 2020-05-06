import React from 'react';
import '../assets/css/weather.css';

import axios from 'axios';

class Weather extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };
    }

    componentDidMount() {
    }


    render() {
        return(
            <div>
                
                <div className="home">
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