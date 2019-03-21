import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Services from "./pages/Services";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Services} />
          <Route exact path="/services" component={Services} />
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
