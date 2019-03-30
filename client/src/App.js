import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import FormServiceRequest from "./pages/FormServiceRequest";
import FormSearchOpportunity from "./pages/FormSearchOpportunity";
import ChooseOptions from "./pages/ChooseOptions";
import ContactForm from "./pages/ContactForm";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import UserInfos from "./pages/UserInfos";

function App() {

  
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/UserInfos/:id" component={UserInfos} />
          <Route exact path="/services" component={FormServiceRequest} />
          <Route exact path="/searches" component={FormSearchOpportunity} />
          <Route exact path="/options" component={ChooseOptions} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/send" component={ContactForm} />
          <Route component={NoMatch} />
          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
