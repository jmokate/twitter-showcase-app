import React from "react";
import SearchTweet from "./SearchTweet";
import { Col, Form, InputGroup, Button } from "react-bootstrap";
import axios from "axios";

class SearchTweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      returnedTweets: [],
      displayTweet: false,
      formInput: ""
    };
  }

  handleChange = event => {
    this.setState({ formInput: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const search = this.state.formInput;

    await axios
      .get(`/api/search?q=${search}`)
      .then(response => {
        const searchResults = response.data.statuses;
        this.setState({ returnedTweets: searchResults });
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({
      displayTweet: true,
      formInput: ""
    });
  };

  render() {
    let displayTweet = this.state.displayTweet;
    let displaySearchedTweets;
    const returnedTweets = this.state.returnedTweets;

    if (displayTweet) {
      displaySearchedTweets = returnedTweets.map(tweet => (
        <SearchTweet
          key={tweet.id}
          userImg={tweet.user.profile_image_url}
          userName={tweet.user.name}
          userHandle={tweet.user.screen_name}
          datePosted={tweet.created_at}
          tweetBody={tweet.text}
          retweets={tweet.retweet_count}
          likes={tweet.favorite_count}
        />
      ));
    }
    return (
      <div>
        <br />
        <Col align='center'>
          <h4 className='text'>
            Search for popular and recent tweets from the past 7 days
          </h4>
        </Col>
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
        <br />
        {displaySearchedTweets}
      </div>
    );
  }
}

export default SearchTweets;
