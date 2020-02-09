import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Home />;
  }
}

export default App;
