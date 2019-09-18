import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import People from "./People";
import Film from "./Film";
import Starships from "./Starships";
import Vehicle from "./Vehicle";
import Species from "./Species";
import Planet from "./Planet";

export default class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Router>
          <Sidebar />
          <div className="main-panel">
            <Header />
            <div className="content">
              <div className="container-fluid">
                <Route path="/" exact component={Home} />
                <Route path="/people" component={People} />
                <Route path="/film" component={Film} />
                <Route path="/starships" component={Starships} />
                <Route path="/vehicle" component={Vehicle} />
                <Route path="/species" component={Species} />
                <Route path="/planet" component={Planet} />
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
