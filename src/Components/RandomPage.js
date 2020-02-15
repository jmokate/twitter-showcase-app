import React from "react";
import { Image, Card, CardGroup, Container, Col, Row } from "react-bootstrap";
import { FaComment, FaHeart, FaRetweet } from "react-icons/fa";
import RandomTweet from "./RandomTweet";

class RandomPage extends React.Component {
  constructor() {
    super();
    this.state = {
      userClicked: "",
      returnedTweet: [],
      userImg: "",
      userName: "",
      userHandle: "",
      datePosted: "",
      tweetBody: "",
      comments: 0,
      retweets: 0,
      likes: 0
    };
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
          <Card bg='dark' text='light' border='light'>
            <Card.Img
              variant='top'
              src='https://pbs.twimg.com/profile_images/875392068125769732/yrN-1k0Y_400x400.jpg'
            />
            <Card.Title align='center'>The Onion</Card.Title>
          </Card>
          <Card bg='dark' text='light' border='light'>
            <Card.Img
              variant='top'
              src='https://pbs.twimg.com/profile_images/1208165423109292032/_oEEIsvx_400x400.jpg'
            />
            <Card.Title align='center'>NPR</Card.Title>
          </Card>
          <Card bg='dark' text='light' border='light'>
            <Card.Img
              variant='top'
              src='https://pbs.twimg.com/profile_images/1216015585399705601/Hs-9iDoo_400x400.jpg'
            />
            <Card.Title align='center'>Chicago Bulls</Card.Title>
          </Card>
          <Card bg='dark' text='light' border='light'>
            <Card.Img
              variant='top'
              src='https://pbs.twimg.com/profile_images/1281990037/Unknown_400x400.jpeg'
            />
            <Card.Title align='center'>Norm Macdonald</Card.Title>
          </Card>
          <Card bg='dark' text='light' border='light'>
            <Card.Img
              variant='top'
              src='https://pbs.twimg.com/profile_images/1212786806325821440/reFtNK23.png'
            />
            <Card.Title align='center'>Crypto Dog</Card.Title>
          </Card>
        </CardGroup>
        <hr />
        <br />
        {/* fake tweets below */}
        <RandomTweet />
      </div>
    );
  }
}

export default RandomPage;
