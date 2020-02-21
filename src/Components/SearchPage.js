import React from "react";
import SearchTweet from "./SearchTweet";
import { Form, InputGroup, Button } from "react-bootstrap";

class SearchTweets extends React.Component {
  constructor() {
    super();
    this.state = {
      searchedWord: "",
      returnedTweets: [],
      userImg: "",
      userName: "",
      userHandle: "",
      datePosted: "",
      tweetBody: "",
      comments: 0,
      retweets: 0,
      likes: 0,
      displayTweet: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({ displayTweet: !this.state.displayTweet });
    console.log(this.state.displayTweet);
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
              <Button variant='dark' handleSubmit={this.handleSubmit}>
                Search
              </Button>
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
