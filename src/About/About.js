import React, {Component} from 'react';
import './About.css';
import Typing from 'react-typing-animation';

class About extends Component {

    render() {
        return (
            <div>
                <h1><span className="half-highlight">ABOUT</span></h1>
                <div>
                    <Typing>
                        <span>This span will get typed.</span>
                    </Typing>
                </div>
            </div>
        )
    };
}

export default About;