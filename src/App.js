import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import SearchTweets from "./Components/SearchTweets";
import RandomTweets from "./Components/RandomTweets";

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
          <Route path='/search' component={SearchTweets} />
          <Route path='/random' component={RandomTweets} />
        </Switch>
      </Router>
    );
  }
}

export default App;
