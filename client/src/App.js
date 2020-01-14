import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MyAccount from "./pages/MyAccount";
import Nav from "./components/Nav";
import MyPlants from "./pages/MyPlants";
import NoMatch from "./pages/NoMatch";



function App() {
  return (
    <Router >
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={MyAccount} />
          <Route exact path="/myaccount" component={MyAccount} />
          <Route exact path="/myplants" component={MyPlants} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
