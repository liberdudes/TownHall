import React from 'react';
import logo from './logo.svg';
import './App.css';
import {withFirebase} from "./components/Firebase";

function App() {

  var count = 0;

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
      <button onClick={createMessage("test subject")} />
    </div>
  );

  function createMessage(subject) {
    count++;
    this.props.firebase.db.ref('messages/' + count).set({
      subject: subject,
      body: 'test body'
    });
  }
}

export default App;
