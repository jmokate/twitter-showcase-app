import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import SearchPage from "./Components/SearchPage";
import RandomPage from "./Components/RandomPage";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Menu />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' component={SearchPage} />
          <Route path='/random' component={RandomPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
