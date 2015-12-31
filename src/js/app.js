import React from 'react';
import ReactDOM from "react-dom";
import {Link, IndexRoute, Route, Router } from "react-router";

import Home from "./home";
import About from "./about";

let routes = (
  <Router>
    <Route path="/">
      <IndexRoute component={Home} />
      <Route path="About" component={About} />
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById("main"));
