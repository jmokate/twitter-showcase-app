import React from "react";
import { Image, Card, CardGroup, Container, Col, Row } from "react-bootstrap";
import { FaComment, FaHeart, FaRetweet } from "react-icons/fa";

function RandomTweet(props) {
  return (
    <div>
      <Container className='full-tweet'>
        <br />
        <Image className='profile-pic' src={props.userImg} />
        <Row>
          <Col xs={10} className='tweet-header'>
            <span className='user-display-name'>{props.userName} </span>
            <span className='user-profile-handle'>@{props.userHandle}</span>
            <span className='time-posted'> | {props.date}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={11} className='tweet-body'>
            <span>{props.tweetBody}</span>
          </Col>
        </Row>
        <br />
        <Row className='icons'>
          <Col xs={2}>
            <span>
              <FaComment /> {props.comments}
            </span>
          </Col>
          <Col xs={2}>
            <span>
              <FaRetweet /> {props.retweets}
            </span>
          </Col>
          <Col xs={2}>
            <span>
              <FaHeart /> {props.likes}
            </span>
          </Col>
        </Row>

        <hr />
      </Container>
    </div>
  );
}

export default RandomTweet;
