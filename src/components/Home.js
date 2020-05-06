import React from 'react';
import '../assets/css/home.css';

import axios from 'axios';

class Home extends React.Component{

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
                               <h1>Home</h1>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    } 
}



export default Home;