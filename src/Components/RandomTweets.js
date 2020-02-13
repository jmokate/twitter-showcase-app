import React from "react";
import { Image, Card, CardGroup, Container, Col, Row } from "react-bootstrap";
import { FaComment, FaHeart, FaRetweet } from "react-icons/fa";

function RandomTweets() {
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
      <Container className='full-tweet'>
        <br />
        <Image
          className='profile-pic'
          src='https://pbs.twimg.com/profile_images/1212786806325821440/reFtNK23.png'
        />
        <Row>
          <Col xs={10} className='tweet-header'>
            <span className='user-display-name'>Profile Name </span>
            <span className='user-profile-handle'>@Sample</span>
            <span className='time-posted'> | 7h</span>
          </Col>
        </Row>
        <Row>
          <Col xs={11} className='tweet-body'>
            <span>
              Tweet body goes here! keep on bloody typing just to see what we
              get oh my god ok can't stop this just a sample oh babybaby
            </span>
          </Col>
        </Row>
        <br />
        <Row className='icons'>
          <Col xs={2}>
            <span>
              <FaComment /> 5
            </span>
          </Col>
          <Col xs={2}>
            <span>
              <FaRetweet /> 9
            </span>
          </Col>
          <Col xs={2}>
            <span>
              <FaHeart /> 55
            </span>
          </Col>
        </Row>

        <hr />
      </Container>
    </div>
  );
}

export default RandomTweets;
