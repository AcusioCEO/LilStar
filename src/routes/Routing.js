import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import Content from "./Content";

class Routing extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/content" component={Content} exact />
        </Switch>
      </div>
    );
  }
}
export default Routing;
