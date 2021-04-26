import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Jobs from "../components/Jobs/Jobs";
import Description from "../components/Description/Description";
import Header from "../components/Header/Header";

class Routes extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/description" exact component={Description} />
          <Route exact path="*" component={Jobs} />
        </Switch>
      </>
    );
  }
}

export default Routes;
