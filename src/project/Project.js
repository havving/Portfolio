import React, {Component} from 'react';
import Modal from 'react-awesome-modal';

import './Project.css';

class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <div>
                <h1><span className="half-highlight">PROJECT</span></h1>
                <div id="main">
                    <h2>MAIN</h2>
                    <div id="gallery" className="container flex row wrap">
                        <div id="lms">
                            <div className="card" onClick={() => this.openModal()}></div>
                            <Modal
                                visible={this.state.visible}
                                width="400"
                                height="300"
                                effect="fadeInUp"
                                onClickAway={() => this.closeModal()}
                            >
                                <div>
                                    <h1>Title</h1>
                                    <p>Some Contents</p>
                                    <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                                </div>
                            </Modal>
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