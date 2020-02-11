import React from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Image,
  Navbar,
  Nav
} from "react-bootstrap";

function Home() {
  return (
    <div>
      <Navbar collapseOnSelect variant='dark' bg='dark' expand='md'>
        <Navbar.Brand className='twitter'>
          Twitter API Displayer Thingy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='search'>Search Twitter</Nav.Link>
            <Nav.Link href='random'>Random Twitter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

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
