import React from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import axios from "axios";
import onion from "../ProfileImages/onion.jpg";
import npr from "../ProfileImages/npr.jpg";
import bulls from "../ProfileImages/bulls.jpg";
import norm from "../ProfileImages/norm.jpeg";
import dog from "../ProfileImages/dog.png";
import RandomTweet from "./RandomTweet";

class RandomPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTweet: false,
      randomTweet: {}
    };
  }

  handleSelectedUser = user => {
    this.getRandomTweetFromServer(user);
  };

  getRandomTweetFromServer = async user => {
    const url = `/api/random?screen_name=${user}`;
    await axios
      .get(url)
      .then(response => {
        this.setState({
          displayTweet: true,
          randomTweet: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let displayTweet = this.state.displayTweet;
    let displayRandomTweet;

    if (displayTweet) {
      displayRandomTweet = (
        <RandomTweet
          displayTweet={this.state.displayTweet}
          randomTweet={this.state.randomTweet}
        />
      );
    }

    return (
      <div>
        <br />
        <Row>
          <Col align='center'>
            <h3 className='text'>
              Click a user below and view some random Tweets!
            </h3>
            <br />
          </Col>
        </Row>
        <CardGroup>
          <Card
            bg='dark'
            text='light'
            border='light'
            name='TheOnion'
            onClick={() => this.handleSelectedUser("TheOnion")}
          >
            <Card.Img variant='top' src={onion} alt='The Onion Logo' />
            <Card.Title align='center'>The Onion</Card.Title>
          </Card>
          <Card
            bg='dark'
            text='light'
            border='light'
            onClick={() => this.handleSelectedUser("NPR")}
          >
            <Card.Img variant='top' src={npr} alt='NPR Logo' />
            <Card.Title align='center'>NPR</Card.Title>
          </Card>
          <Card
            bg='dark'
            text='light'
            border='light'
            onClick={() => this.handleSelectedUser("chicagobulls")}
          >
            <Card.Img variant='top' src={bulls} alt='Chicago Bulls Logo' />
            <Card.Title align='center'>Chicago Bulls</Card.Title>
          </Card>
          <Card
            bg='dark'
            text='light'
            border='light'
            onClick={() => this.handleSelectedUser("normmacdonald")}
          >
            <Card.Img variant='top' src={norm} alt='Norm Macdonald Logo' />
            <Card.Title align='center'>Norm Macdonald</Card.Title>
          </Card>
          <Card
            bg='dark'
            text='light'
            border='light'
            onClick={() => this.handleSelectedUser("TheCryptoDog")}
          >
            <Card.Img variant='top' src={dog} alt='The Crypto Dog Logo' />
            <Card.Title align='center'>Crypto Dog</Card.Title>
          </Card>
        </CardGroup>
        <br />
        <br />

        {displayRandomTweet}
      </div>
    );
  }
}

export default RandomPage;
