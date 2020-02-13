import React from "react";
import {
  Form,
  Col,
  InputGroup,
  Button,
  Card,
  Image,
  Container,
  Row
} from "react-bootstrap";
import { FaComment, FaHeart, FaRetweet } from "react-icons/fa";

function SearchTweets() {
  return (
    <div>
      <Form>
        <InputGroup className='search-bar'>
          {/* <Col></Col> */}
          <Form.Control
            align='center'
            size='lg'
            type='input'
            placeholder='search tweets'
          />
          <InputGroup.Append>
            <Button variant='dark'>Search</Button>
          </InputGroup.Append>
          {/* <Col></Col> */}
        </InputGroup>
      </Form>
      <br />
      <hr />
      <Container className='full-tweet'>
        <br />
        <Image
          className='profile-pic'
          src='https://images.unsplash.com/photo-1542260151-26fd0558f5f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
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
      <Container className='full-tweet'>
        <br />
        <Image
          className='profile-pic'
          src='https://images.unsplash.com/photo-1542260151-26fd0558f5f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
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
      <Container className='full-tweet'>
        <br />
        <Image
          className='profile-pic'
          src='https://images.unsplash.com/photo-1542260151-26fd0558f5f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
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

export default SearchTweets;
