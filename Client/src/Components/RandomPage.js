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
      name: "",
      userImg: "",
      userName: "",
      userHandle: "",
      datePosted: "",
      tweetBody: "",
      retweets: null,
      likes: null
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
        const statusArray = response.data;
        const randomTweet =
          statusArray[Math.floor(Math.random() * statusArray.length)];
        const userImg = randomTweet.user.profile_image_url;
        const tweetBody = randomTweet.text;
        const datePosted = randomTweet.created_at;
        const userName = randomTweet.user.name;
        const userHandle = randomTweet.user.screen_name;
        const retweets = randomTweet.retweet_count;
        const likes = randomTweet.favorite_count;

        this.setState({
          displayTweet: true,
          userImg: userImg,
          tweetBody: tweetBody,
          datePosted: datePosted,
          userName: userName,
          userHandle: userHandle,
          retweets: retweets,
          likes: likes
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
          userImg={this.state.userImg}
          userName={this.state.userName}
          userHandle={this.state.userHandle}
          datePosted={this.state.datePosted}
          tweetBody={this.state.tweetBody}
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
