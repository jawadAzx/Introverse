import React from 'react'
import { render } from "react-dom"
import LoginPage from "./LoginPage"
import SignupPage from "./SignupPage"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dashboard from "./Dashboard"
import store from "../store"
import { Provider } from "react-redux";
import SearchResults from './searchs/SearchResults';
import Adminpage from "../components/admin/Adminpage"
import Tablespage from "../components/admin/Tablespage"
import BlockPage from './admin/BlockPage';
import Deletepage from './admin/Deletepage';
import Clown from '../components/clown/Clown';
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/searchresults" component={SearchResults} />
          <Route exact path="/admin" component={Adminpage} />
          <Route exact path="/tables" component={Tablespage} />
          <Route exact path="/block" component={BlockPage} />
          <Route exact path="/deleteverse" component={Deletepage} />
          <Route exact path="/clown" component={Clown} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App

const appDiv = document.getElementById("app");
render(<App />, appDiv);
