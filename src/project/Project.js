import React, {Component} from 'react';
import './Project.css';

class Project extends Component {

    render() {
        return (
            <div>
                <h1><span className="half-highlight">PROJECT</span></h1>
                <div id="main">
                    <h2>MAIN</h2>
                    <div id="gallery" className="container flex row wrap">
                        <div id="lms">
                            <div className="card"></div>
                            <div className="text">
                                <div className="bold">LMS</div>
                                <span className="highlight">Java / RV</span>
                            </div>
                            <div className="button" id="ordering">LEARN MORE</div>
                        </div>
                        <div id="monitor">
                            <div className="card"></div>
                        </div>
                        <div id="ai">
                            <div className="card"></div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>SIDE</h2>
                </div>
            </div>
        )
    };
}

export default Project;