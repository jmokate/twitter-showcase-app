import React from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import axios from "axios";

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
    console.log(user);
    this.getRandomTweetFromServer(user);
  };

  getRandomTweetFromServer = async user => {
    console.log(user);

    await axios
      .get(`/api/random?screen_name=${user}`)
      .then(response => {
        console.log(response);
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
        console.log(tweetBody);

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
          date={this.state.datePosted}
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
            <h2>Click a user below and view some random Tweets!</h2>
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
            onClick={() => this.handleSelectedUser("NPR")}
          >
            <Card.Img
              variant='top'
              src='https://pbs.twimg.com/profile_images/1208165423109292032/_oEEIsvx_400x400.jpg'
              alt='The Onion Logo'
            />
            <Card.Title align='center'>NPR</Card.Title>
          </Card>
          <Card
            bg='dark'
            text='light'
            border='light'
            onClick={() => this.handleSelectedUser("chicagobulls")}
          >
            <Card.Img
              variant='top'
              src='https://pbs.twimg.com/profile_images/1236410969389137920/k0q41K2t_400x400.jpg'
              alt='Chicago Bulls Logo'
            />
            <Card.Title align='center'>Chicago Bulls</Card.Title>
          </Card>
          <Card
            bg='dark'
            text='light'
            border='light'
            onClick={() => this.handleSelectedUser("normmacdonald")}
          >
            <Card.Img
              variant='top'
              src='https://pbs.twimg.com/profile_images/1281990037/Unknown_400x400.jpeg'
              alt='Norm Macdonald Logo'
            />
            <Card.Title align='center'>Norm Macdonald</Card.Title>
          </Card>
          <Card
            bg='dark'
            text='light'
            border='light'
            onClick={() => this.handleSelectedUser("TheCryptoDog")}
          >
            <Card.Img
              variant='top'
              src='https://pbs.twimg.com/profile_images/1212786806325821440/reFtNK23.png'
              alt='The Crypto Dog Logo'
            />
            <Card.Title align='center'>Crypto Dog</Card.Title>
          </Card>
        </CardGroup>
        <hr />
        <br />

        {displayRandomTweet}
      </div>
    );
  }
}

export default RandomPage;
