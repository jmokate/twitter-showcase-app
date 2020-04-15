import React from "react";
import { Col, Image, Container, Row } from "react-bootstrap";
import { FaHeart, FaRetweet } from "react-icons/fa";
import moment from "moment";

function SearchTweet(props) {
  const { tweet } = props;
  const date = tweet.datePosted;
  const timePosted = moment(date).fromNow();

  return (
    <div>
      <Container className='full-tweet'>
        <br />
        <Image className='profile-pic' src={tweet.userImg} />
        <Row>
          <Col xs={10} className='tweet-header'>
            <span className='user-display-name'>{tweet.userName} </span>
            <span className='user-profile-handle'>@{tweet.userHandle}</span>
            <span className='time-posted'> | {timePosted}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={11} className='tweet-body'>
            <span>{tweet.tweetBody}</span>
          </Col>
        </Row>
        <br />
        <Row className='icons'>
          <Col xs={2}>
            <span>
              <FaRetweet /> {tweet.retweets}
            </span>
          </Col>
          <Col xs={2}>
            <span>
              <FaHeart /> {tweet.likes}
            </span>
          </Col>
        </Row>

        <hr />
      </Container>
    </div>
  );
}

export default SearchTweet;
