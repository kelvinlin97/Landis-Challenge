/* eslint-disable jsx-a11y/alt-text */
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Accounts from './Accounts'
import Analytics from './Analytics'

function App() {
  return (
    <Router>
        <nav id="sideNavbar">
          <img id="landis-logo" src="https://i.imgur.com/2EWStos.png"/>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/accounts">Accounts</Link>
            </li>
            <li>
              <Link to="/analytics">Analytics</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/accounts" component={Accounts}>
          </Route>
          <Route path="/analytics" component={Analytics}>
          </Route>
          <Route path="/" component={Accounts}>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
