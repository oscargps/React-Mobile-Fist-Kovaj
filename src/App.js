import React from "react";
import logo from "./static/logo.jpg";
import Menu from  './components/menu'
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="" className="logo"/>
      </header>
      <div className="principal">
        <div className="item">
          <h3>router view</h3>
        </div>
        <div className="item">
          <h3>router view</h3>
        </div>
        <div className="item">
          <h3>router view</h3>
        </div>
      </div>
      <div className="menu">
        <Menu/>
      </div>
    </div>
  );
}

export default App;
