import React, { Component } from 'react';
// import './App.css';
import GoogleLogin from 'react-google-login';
// import { GoogleLogout } from 'react-google-login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import FormServiceRequest from "./pages/FormServiceRequest";
import FormSearchOpportunity from "./pages/FormSearchOpportunity";
import ChooseOptions from "./pages/ChooseOptions";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

class App extends Component {

  render() {

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
        <Router>
          <div>
            <Nav />
            <GoogleLogin
              // clientId="702002442826-lnucl09e0ce578hh3n320kj3156ptdjp.apps.googleusercontent.com"
              clientId="601157754613-0js8ncq3uld0pj9gp3vtf1insj3lacu4.apps.googleusercontent.com"
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
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
    )
  }
};


export default App;
