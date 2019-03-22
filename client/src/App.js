// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Landing from "./pages/Landing";
// import UserInfos from "./pages/UserInfos";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Landing} />
//           <Route exact path="/Account" component={UserInfos} />
//           <Route exact path="/books" component={Landing} />
//           <Route exact path="/books/:id" component={Detail} />
//           <Route component={NoMatch} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

import React, { Component } from 'react';
// import './App.css';
import GoogleLogin from 'react-google-login';

class App extends Component {

  render() {

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <div className="App">
        <h1>LOGIN WITH GOOGLE</h1>

      <GoogleLogin
        clientId="702002442826-lnucl09e0ce578hh3n320kj3156ptdjp.apps.googleusercontent.com"
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>
    );
  }
}

export default App;
