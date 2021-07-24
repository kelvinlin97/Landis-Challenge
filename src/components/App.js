import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Accounts from './Accounts'
import Analytics from './Analytics'

function App() {
  return (
    <Router>
      <div>
        <nav>
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
      </div>
    </Router>
  );
}

export default App;
