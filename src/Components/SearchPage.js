import React from "react";
import SearchTweet from "./SearchTweet";
import {
  Form,
  Col,
  InputGroup,
  Button,
  Card,
  Image,
  Container,
  Row
} from "react-bootstrap";
import { FaComment, FaHeart, FaRetweet } from "react-icons/fa";

class SearchTweets extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {}

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit}>
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
        <br />
        <hr />
        <SearchTweet />
      </div>
    );
  }
}

export default SearchTweets;
