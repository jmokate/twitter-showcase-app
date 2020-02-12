import React from "react";
import { Form, Col, InputGroup, Button } from "react-bootstrap";

function SearchTweets() {
  return (
    <Form>
      <InputGroup className='search-bar'>
        {/* <Col></Col> */}
        <Form.Control
          align='center'
          size='lg'
          type='input'
          placeholder='search tweets'
        />
        <InputGroup.Append>
          <Button variant='dark'>Search</Button>
        </InputGroup.Append>
        {/* <Col></Col> */}
      </InputGroup>
    </Form>
  );
}

export default SearchTweets;
