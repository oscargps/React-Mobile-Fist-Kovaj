import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./static/logo.png";
import Menu2 from "./components/Menu2";
import Home from "./pages/Home";
import Estadisticas from "./pages/Estadisticas";
import Empresa from "./pages/Empresa";
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
              <Route exact path="/empresa" component={Empresa} />
            </Switch>
          </Layout>
        </div>
        <Menu2 />
      </div>
    </BrowserRouter>
  );
}

export default App;
