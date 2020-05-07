import React from 'react';
import '../assets/css/home.css';
import { Link } from 'react-router-dom';

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
                                            <ul>
                                                <li>Angular</li>
                                                <li>React</li>
                                                <li>Javascript</li>
                                                <li>Typescript</li>
                                                <li>Ruby on Rails</li>
                                                <li>UI/UX</li>
                                            </ul>
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

                <div className="weather-icon">
                    <Link to="/weather">
                        <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" />
                    </Link>
                </div>

                <div className="dot one"></div>
                <div className="dot two"></div>
                <div className="dot three"></div>
                <div className="dot four"></div>

            </div>
        );
    }
}



export default Home;