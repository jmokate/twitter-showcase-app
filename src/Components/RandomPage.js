import React from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";

import RandomTweet from "./RandomTweet";

class RandomPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userClicked: "",
      returnedTweet: [],
      userImg:
        "https://pbs.twimg.com/profile_images/875392068125769732/yrN-1k0Y_400x400.jpg",
      userName: "The Onion",
      userHandle: "theonion",
      datePosted: "4h",
      tweetBody: "this is just a test",
      comments: 5,
      retweets: 9,
      likes: 55,
      displayTweet: false
    };
    this.toggleDisplayTweet = this.toggleDisplayTweet.bind(this);
  }

  toggleDisplayTweet() {
    this.setState({ displayTweet: !this.state.displayTweet });
    console.log(this.state.displayTweet);
  }

  render() {
    let displayRandomTweet = null;

    if (this.state.displayTweet) {
      displayRandomTweet = (
        <RandomTweet
          userImg={this.state.userImg}
          userName={this.state.userName}
          userHandle={this.state.userHandle}
          date={this.state.datePosted}
          tweetBody={this.state.tweetBody}
          comments={this.state.comments}
          retweets={this.state.retweets}
          likes={this.state.likes}
        />
      );
    }

    return (
      <div>
        <br />
        <Row>
          <Col align='center'>
            <h2>Click a user below and view some random Tweets!</h2>
          </Col>
        </Row>
        <CardGroup>
          <Card
            bg='dark'
            text='light'
            border='light'
            onClick={() => this.toggleDisplayTweet()}
          >
            <Card.Img
              variant='top'
              src='https://pbs.twimg.com/profile_images/875392068125769732/yrN-1k0Y_400x400.jpg'
            />
            <Card.Title align='center'>The Onion</Card.Title>
          </Card>
          <Card
            bg='dark'
            text='light'
            border='light'
            onClick={() => this.toggleDisplayTweet()}
          >
            <Card.Img
              variant='top'
              src='https://pbs.twimg.com/profile_images/1208165423109292032/_oEEIsvx_400x400.jpg'
            />
            <Card.Title align='center'>NPR</Card.Title>
          </Card>
          <Card
            bg='dark'
            text='light'
            border='light'
            onClick={() => this.toggleDisplayTweet()}
          >
            <Card.Img
              variant='top'
              src='https://pbs.twimg.com/profile_images/1231217224742002691/f7K2X27D_400x400.jpg'
            />
            <Card.Title align='center'>Chicago Bulls</Card.Title>
          </Card>
          <Card
            bg='dark'
            text='light'
            border='light'
            onClick={() => this.toggleDisplayTweet()}
          >
            <Card.Img
              variant='top'
              src='https://pbs.twimg.com/profile_images/1281990037/Unknown_400x400.jpeg'
            />
            <Card.Title align='center'>Norm Macdonald</Card.Title>
          </Card>
          <Card
            bg='dark'
            text='light'
            border='light'
            onClick={() => this.toggleDisplayTweet()}
          >
            <Card.Img
              variant='top'
              src='https://pbs.twimg.com/profile_images/1212786806325821440/reFtNK23.png'
            />
            <Card.Title align='center'>Crypto Dog</Card.Title>
          </Card>
        </CardGroup>
        <hr />
        <br />

        {displayRandomTweet}
      </div>
    );
  }
}

export default RandomPage;
