import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./static/logo.png";
import Menu from "./components/menu";
import Home from "./pages/Home";
import Layout from "./components/layout";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="" className="logo" />
      </header>
      <div className="AppContent">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
}

export default App;
