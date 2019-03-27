import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import UserInfos from "./pages/UserInfos";
import FormServiceRequest from "./pages/FormServiceRequest";
import FormSearchOpportunity from "./pages/FormSearchOpportunity";
import ChooseOptions from "./pages/ChooseOptions";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/UserInfos" component={UserInfos} />
          <Route exact path="/services" component={FormServiceRequest} />
          <Route exact path="/searches" component={FormSearchOpportunity} />
          <Route exact path="/options" component={ChooseOptions} />
          <Route exact path="/landing" component={Landing} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
