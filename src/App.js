import './css/demo.css';

import React, {Component} from 'react';
import {SectionsContainer, Section, Header} from 'react-fullpage';
import TypeWriterEffect from 'react-typewriter-effect';
import Typewriter from 'react-simple-typewriter'

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
                    <a href="#sectionOne" className="opa">Home</a>
                    <a href="#sectionTwo">About</a>
                    <a href="#sectionThree">Skills</a>
                    <a href="#sectionFour">Project</a>
                    <a href="#sectionFive">Effort</a>
                </Header>

                <SectionsContainer className="container" {...options} activeSection={current}>
                    <Section className="custom-section" verticalAlign="true" color="#69D2E7">
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: '나눔바른고딕 Bold',
                                color: '#fff',
                                fontWeight: 500,
                                fontSize: '4vw'
                            }}
                            startDelay={100}
                            cursorColor="black"
                            text="안녕하세요, 개발자 황혜빈의 포트폴리오 입니다."
                            typeSpeed={100}
                        />
                    </Section>
                    <Section color="#A7DBD8">Page 2</Section>
                    <Section color="#E0E4CC">Page 3</Section>
                    <Section color="#FAE0D4">Page 4</Section>
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
