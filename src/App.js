import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from "./test/MyComponent";
import Say from './test/Say'
import EventPractice from "./test/EventPractice";
import IterationSample from "./test/IterationSample";
import LifeCycleSample from "./test/LifeCycleSample";
import ErrorBoundary from "./test/ErrorBoundary";
import Counter from "./test/Counter";
import Info from "./test/Info";
import Average from "./test/Average";


// 모듈 불러오기(import)
const App = () => {
    return <Info />;
};


// 랜덤 색상 생성
/*function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// 클래스형 컴포넌트
class App extends Component {
    state = {
        color: '#000000'
    }

    handleClick = () => {
        this.setState({
            color: getRandomColor()
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Random Color</button>
                <ErrorBoundary>
                    <LifeCycleSample color={this.state.color}/>
                </ErrorBoundary>
            </div>
        );
    }
}*/


// App이라는 컴포넌트 생성 (함수형 컴포넌트)
/*function App() {
return (
<div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
Edit <code>src/App.js</code> and save to reload.
</p>
<a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a>
</header>
</div>
);
}*/

export default App;
