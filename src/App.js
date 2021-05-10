import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from "./test/MyComponent";
import Say from './test/Say'

// 모듈 불러오기(import)
const App = () => {
  return <Say />
};


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
