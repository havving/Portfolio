import './App.css';

import React, {Component} from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import NavBar from "./main/NavBar";


class App extends Component {
    render() {
        let options = {
            activeClass: 'active',  // the class that is appended to the sections link
            anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],  // the anchors for each sections
            arrowNavigation:      true,  // use arrow keys
            className: 'SectionContainer',  // the class name for the section container
            delay: 1000,  // the scroll animation speed
            navigation:           true,  // use dots navigatio
            scrollBar:            false,  // use the browser default scrollbar
            sectionClassName:     'Section',  // the class that is appended to the sections links
            sectionPaddingTop:    '0px',  // the section top padding
            sectionPaddingBottom: '0px',  // the section bottom padding
            verticalAlign:        false  // align the content of each section vertical
        };

        return (
            <div>
                <Header>
                    <a href="#sectionOne">Section One</a>
                    <a href="#sectionTwo">Section Two</a>
                    <a href="#sectionThree">Section Three</a>
                </Header>
                <Footer>
                    <a href="">Documentation</a>
                    <a href="">Example Source</a>
                    <a href="">About</a>
                </Footer>
                <SectionsContainer className="container" {...options}>
                    <Section className="custom-section" verticalAlign="true" color="#69D2E7">Page 1</Section>
                    <Section color="#A7DBD8">Page 2</Section>
                    <Section color="#E0E4CC">Page 3</Section>
                </SectionsContainer>
            </div>
        );
    }
};

export default App;
