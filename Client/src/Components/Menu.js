import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";

function Menu() {
  return (
    <Navbar collapseOnSelect variant='dark' bg='dark' expand='md'>
      <Navbar.Brand className='twitter'>
        <FaTwitter size='3em' color='rgb(255, 113, 35)' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='search'>Search Twitter</Nav.Link>
          <Nav.Link href='random'>Random Twitter</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
