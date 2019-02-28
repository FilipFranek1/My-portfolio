import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/App/App.css";
import NavBar from "./components/navbar";
import HomePage from "./components/homepage";
import About from "./components/subsites/about";
import Contact from "./components/subsites/contact";
import Projects from "./components/subsites/projects";
import Skills from "./components/subsites/skills";
import Error from "./components/subsites/error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={About} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/projects" component={Projects} exact />
            <Route path="/skills" component={Skills} exact />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
