import React from 'react';
import '../assets/css/home.css';

import axios from 'axios';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };
    }

    componentDidMount() {
    }


    render() {
        return (
            <div>
                <div className="home">
                    <div className="container mainHead">
                        <div className="row">
                            <div className="col-7">
                                <div className="content">
                                    <h3 className="bgHead main-home">Awais;</h3>
                                    <div className="row">
                                        <div className="col-12">
                                            <h1><b>Hi, I'm Awais.</b></h1>
                                            <h2>
                                                I'm a Full Stack Developer
                                            </h2>
                                            <p>
                                                <ul>
                                                    <li>Angular</li>
                                                    <li>React</li>
                                                    <li>Javascript</li>
                                                    <li>Typescript</li>
                                                    <li>Ruby on Rails</li>
                                                    <li>UI/UX</li>
                                                </ul>
                                            </p>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-5">
                                <img
                                    className="profile-img-mobile"
                                    src="https://cdni.iconscout.com/illustration/premium/thumb/developer-2143200-1801815.png"
                                    alt="img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Home;