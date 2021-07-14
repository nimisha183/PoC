import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/about";
import Home from "./Components/home2";
import Details from "./Components/details";
import ToDo from "./ToDo/home";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/details" exact component={() => <Details />} />
          <Route path="/todo" exact component={() => <ToDo />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
