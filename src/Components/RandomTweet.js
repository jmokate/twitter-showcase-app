import React from "react";
import { Image, Card, CardGroup, Container, Col, Row } from "react-bootstrap";
import { FaComment, FaHeart, FaRetweet } from "react-icons/fa";

function RandomTweet() {
  return (
    <div>
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

export default RandomTweet;
