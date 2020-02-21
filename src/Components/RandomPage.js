import React from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";

import RandomTweet from "./RandomTweet";

class RandomPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userClicked: "",
      returnedTweet: [
        {
          userImg:
            "https://pbs.twimg.com/profile_images/875392068125769732/yrN-1k0Y_400x400.jpg",
          userName: "The Onion",
          userHandle: "theonion",
          datePosted: "4h",
          tweetBody: "this is just a test",
          comments: 5,
          retweets: 9,
          likes: 55
        }
      ]
    };
    this.generateRandomTweet = this.generateRandomTweet.bind(this);
  }

  generateRandomTweet() {
    console.log("cliked");
    // const randomTweet =
  }

  render() {
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
            onClick={() => this.generateRandomTweet()}
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
            onClick={() => this.generateRandomTweet()}
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
            onClick={() => this.generateRandomTweet()}
          >
            <Card.Img
              variant='top'
              src='https://pbs.twimg.com/profile_images/1216015585399705601/Hs-9iDoo_400x400.jpg'
            />
            <Card.Title align='center'>Chicago Bulls</Card.Title>
          </Card>
          <Card
            bg='dark'
            text='light'
            border='light'
            onClick={() => this.generateRandomTweet()}
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
            onClick={() => this.generateRandomTweet()}
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
        {/* fake tweets below - also put info in object in returnedTweet array*/}
        <RandomTweet
          userImg={this.state.returnedTweet.userImg}
          userName={this.state.returnedTweet.userName}
          userHandle={this.state.returnedTweet.userHandle}
          date={this.state.returnedTweet.datePosted}
          tweetBody={this.state.returnedTweet.tweetBody}
          comments={this.state.returnedTweet.comments}
          retweets={this.state.returnedTweet.retweets}
          likes={this.state.returnedTweet.likes}
        />
      </div>
    );
  }
}

export default RandomPage;
