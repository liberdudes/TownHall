import React from 'react';
import logo from './logo.svg';
import Navbar from './Navigation'
import './App.css';
import * as helper from './components/Firebase/helper'

function App() {

  return (

    <div className="App">
      <Navbar></Navbar>

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="node_modules/lib/bootstrap2-toggle.css"></link>
    </div>
  );
}

export default App;
