import React, {Component} from 'react';
import TypeWriterEffect from "react-typewriter-effect";

class Home extends Component {

    render() {
        return (
            <div>
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
            </div>
        )
    };
}

export default Home;