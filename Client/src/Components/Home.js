import React from "react";
import { Col } from "react-bootstrap";

function Home() {
  return (
    <div>
      <br />
      <Col align='center'>
        <h1 className='text'>
          Twitter API Application
          <hr />
        </h1>
      </Col>

      <div id='transparent'></div>

      <Col align='center'>
        <h4 className='text'>
          Use this app to search Twitter or find random tweets from some of my
          favorite users.
        </h4>
      </Col>
    </div>
  );
}

export default Home;
