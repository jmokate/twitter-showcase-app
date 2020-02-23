import React from "react";
import SearchTweet from "./SearchTweet";
import { Form, InputGroup, Button } from "react-bootstrap";

class SearchTweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formInput: "",
      searchedWord: "",
      returnedTweets: [],
      userImg:
        "https://images.unsplash.com/photo-1542260151-26fd0558f5f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      userName: "test person",
      userHandle: "funtest",
      datePosted: "3h",
      tweetBody: "omg this is such a test, check me out!",
      comments: 3,
      retweets: 5,
      likes: 99,
      displayTweet: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ formInput: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      displayTweet: !this.state.displayTweet,
      formInput: ""
    });
    console.log(this.state.displayTweet);
  }

  render() {
    let displaySearchedTweet;
    if (this.state.displayTweet) {
      displaySearchedTweet = (
        <SearchTweet
          userImg={this.state.userImg}
          userName={this.state.userName}
          userHandle={this.state.userHandle}
          datePosted={this.state.datePosted}
          tweetBody={this.state.tweetBody}
          comments={this.state.comments}
          retweets={this.state.retweets}
          likes={this.state.likes}
        />
      );
    }
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <InputGroup className='search-bar'>
            <Form.Control
              align='center'
              size='lg'
              type='input'
              placeholder='search tweets'
              value={this.state.formInput}
              onChange={this.handleChange}
            />
            <InputGroup.Append>
              <Button variant='dark' onClick={this.handleSubmit}>
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        <br />
        <hr />
        {displaySearchedTweet}
      </div>
    );
  }
}

export default SearchTweets;
