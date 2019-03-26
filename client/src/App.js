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
import { GoogleLogin } from "react-google-login";

class App extends Component {

  constructor() {
    super();
    this.state = { isAuthenticated: false, user: null, token: ''};
  }

  logout = () => {
    this.setState({isAuthenticated: false, token: '', user: null})
  };

  googleResponse = (response) => {
    console.log(response);
  };


  onFailure = (error) => {
    alert(error);
  }

  render() {

    let content = !!this.state.isAuthenticated ?
      (
        <div>
          <p>Authenticated</p>
            <div>
              {this.state.user.email}
            </div>
            <div>
              <button onClick={this.logout} className="button">Log out</button>
            </div>
        </div>
      ) : 
      (
        <div>
          <GoogleLogin
            clientId="601157754613-0js8ncq3uld0pj9gp3vtf1insj3lacu4.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.googleResponse}
            onFailure={this.onFailure}
          />
        </div>
      );


    return (
      
        <Router>
          <div>
            
            <Nav 
            />
            {content}
            {/* <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/UserInfos" component={UserInfos} />
              <Route exact path="/services" component={FormServiceRequest} />
              <Route exact path="/searches" component={FormSearchOpportunity} />
              <Route exact path="/options" component={ChooseOptions} />
              <Route exact path="/landing" component={Landing} />
              <Route component={NoMatch} />
            </Switch> */}
          </div>
        </Router>
    )
  }
};


export default App;
