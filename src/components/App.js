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
        <img id="landis-logo" src="https://i.imgur.com/2EWStos.png" />
        <ul id="sidebar-links">
          <li className="icon-container">
          <img className="icon" src="https://www.iconpacks.net/icons/1/free-user-icon-244-thumb.png" />
            <Link className="links" to="/accounts">Accounts</Link>
          </li>
          <li id="space-analytics-link">
          <img className="icon" src="https://static.thenounproject.com/png/16201-200.png" />
            <Link className="links" to="/analytics">Analytics</Link>
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
