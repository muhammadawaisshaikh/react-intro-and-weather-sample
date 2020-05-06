import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/header.css';

function Header() {
    return(
        <div>
            <div className="header">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <div className='logo'>
                                <a href="#">React App</a>
                            </div>
                        </div>

                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="nav">
                                 <ul>
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/weather">Weather</Link></li>
                                 </ul>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;