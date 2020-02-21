import React from "react";
import { Col } from "react-bootstrap";

function Home() {
  return (
    <div>
      <br />
      <Col align='center'>
        <h1>
          Tweet Finder
          <hr />
        </h1>
      </Col>

      <div id='transparent'></div>

      <Col align='center'>
        <h4>Use this application to search Twitter or find random Tweets</h4>
      </Col>
    </div>
  );
}

export default Home;
