import './css/demo.css';

import React, {Component} from 'react';
import {SectionsContainer, Section, Header} from 'react-fullpage';
import TypeWriterEffect from 'react-typewriter-effect';

import Skills from "./skills/Skills";
import About from "./About/About";
import Project from "./Project/Project";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0,
        }
    }

    render() {
        let options = {
            activeClass: 'active',  // the class that is appended to the sections link
            anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive'],  // the anchors for each sections
            arrowNavigation: true,  // use arrow keys
            className: 'SectionContainer',  // the class name for the section container
            delay: 1000,  // the scroll animation speed
            navigation: true,  // use dots navigatio
            scrollBar: false,  // use the browser default scrollbar
            sectionClassName: 'Section',  // the class that is appended to the sections links
            sectionPaddingTop: '50px',  // the section top padding
            sectionPaddingBottom: '50px',  // the section bottom padding
            verticalAlign: false  // align the content of each section vertical
        };

        const {current} = this.state

        return (
            <div>
                <Header>
                    <a href="#sectionOne" className="opa">HOME</a>
                    <a href="#sectionTwo">ABOUT</a>
                    <a href="#sectionThree">SKILLS</a>
                    <a href="#sectionFour">PROJECT</a>
                    <a href="#sectionFive">~ING</a>
                </Header>

                <SectionsContainer className="container" {...options} activeSection={current}>
                    <Section className="custom-section" verticalAlign="true" color="#69D2E7">
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: 'raleway-bold',
                                color: '#fff',
                                fontWeight: 500,
                                fontSize: '4vw'
                            }}
                            startDelay={100}
                            cursorColor="black"
                            text="Hello, This is Hye-Bin Portfolio World!"
                            typeSpeed={100}
                        />
                    </Section>
                    <Section id="about" color="#F6F6F6"><About /></Section>
                    <Section id="skills" color="#E0E4CC"><Skills /></Section>
                    <Section id="project" color="#FAE0D4"><Project /></Section>
                    <Section color="#EAEAEA">1日 1 posting,
                        1日 1 commit,
                        1日 1 coding test를 실천중입니다.
                    </Section>
                </SectionsContainer>
            </div>
        )
    }
}

export default App;


// Test
/*class App extends Component {
    render() {
        return (
            <div>
                <ScrollBox ref={(ref) => this.scrollBox=ref}/>
                <button onClick={() => this.scrollBox.scrollToBottom()}>
                    맨 밑으로
                </button>
            </div>
        );
    }
}

export default App;*/
