import React, {Component} from 'react';
import './About.css';
import Profile from '../resources/img/profile.png'

class About extends Component {

    render() {
        return (
            <div className="container flex">
                <h1><span className="half-highlight">ABOUT</span></h1>
                <div className='profile-div'>
                    <div>
                        <img src={Profile} className="profile"/>
                    </div>
                    <div className="label">
                        <span>Developer <b>Hwang Hye-Bin</b></span>
                    </div>
                </div>

                <div>

                </div>
            </div>
        )
    };
}

export default About;