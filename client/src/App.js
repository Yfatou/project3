import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import FormServiceRequest from "./pages/FormServiceRequest";
import FormSearchOpportunity from "./pages/FormSearchOpportunity";
import ChooseOptions from "./pages/ChooseOptions";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Calendar from "./components/Calendar";




function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Calendar />
    
        <Switch>
          <Route exact path="/" component={Landing} />
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
