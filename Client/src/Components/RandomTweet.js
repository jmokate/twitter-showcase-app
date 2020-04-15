import React from "react";
import { Image, Container, Col, Row } from "react-bootstrap";
import { FaHeart, FaRetweet } from "react-icons/fa";
import moment from "moment";
import "../index.css";

function RandomTweet(props) {
  const { randomTweet } = props;
  const date = randomTweet.datePosted;
  const timePosted = moment(date).fromNow();
  return (
    <div>
      <Container className='full-tweet'>
        <br />
        <Image className='profile-pic' src={randomTweet.userImg} />
        <Row>
          <Col xs={10} className='tweet-header'>
            <span className='user-display-name'>{randomTweet.userName} </span>
            <span className='user-profile-handle'>
              @{randomTweet.userHandle}
            </span>
            <span className='time-posted'> | {timePosted}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={11} className='tweet-body'>
            <span>{randomTweet.tweetBody}</span>
          </Col>
        </Row>
        <br />
        <Row className='icons'>
          <Col xs={2}>
            <span>
              <FaRetweet /> {randomTweet.retweets}
            </span>
          </Col>
          <Col xs={2}>
            <span>
              <FaHeart /> {randomTweet.likes}
            </span>
          </Col>
        </Row>

        <hr />
      </Container>
    </div>
  );
}

export default RandomTweet;
