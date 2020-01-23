import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MyAccount from "./pages/MyAccount";
import NoMatch from "./pages/NoMatch";
import FirstPage from "./pages/FirstPage";



function App() {
  return (
    <Router >
      <div>
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <Route exact path="/myaccount/:id" component={MyAccount} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
