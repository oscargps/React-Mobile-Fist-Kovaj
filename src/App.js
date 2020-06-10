import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./static/logo.png";
import Menu from "./components/menu";
import Home from "./pages/Home";
import Estadisticas from "./pages/Estadisticas";
import Layout from "./components/layout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="" className="logo" />
        </header>
        <div className="AppContent">
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/estadisticas" component={Estadisticas} />
            </Switch>
          </Layout>
        </div>
        <div className="menu">
          <Menu />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
