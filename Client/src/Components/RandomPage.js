import React from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import axios from "axios";

import RandomTweet from "./RandomTweet";

class RandomPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      returnedTweet: [],
      userImg:
        "https://pbs.twimg.com/profile_images/875392068125769732/yrN-1k0Y_400x400.jpg",
      userName: "The Onion",
      userHandle: "theonion",
      datePosted: "4h",
      tweetBody: "",
      comments: 5,
      retweets: 9,
      likes: 55,
      displayTweet: true
    };
    // this.toggleDisplayTweet = this.toggleDisplayTweet.bind(this);
    this.getRandomTweetFromServer = this.getRandomTweetFromServer.bind(this);
  }

  // toggleDisplayTweet() {
  //   this.setState({ displayTweet: !this.state.displayTweet });
  //   console.log(this.state.displayTweet);
  // }

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
        const statusArray = response.data.statuses;
        const randomTweet =
          statusArray[Math.floor(Math.random() * statusArray.length)];
        console.log(randomTweet);
        // const text = response.data.statuses.text;
        // this.setState({ tweetBody: text });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let displayRandomTweet = null;

    if (this.state.displayTweet) {
      displayRandomTweet = (
        <RandomTweet
          userImg={this.state.userImg}
          userName={this.state.userName}
          userHandle={this.state.userHandle}
          date={this.state.datePosted}
          tweetBody={this.state.text}
          comments={this.state.comments}
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
          </Col>
        </Row>
        <CardGroup>
          <Card
            bg='dark'
            text='light'
            border='light'
            name='TheOnion'
            //onClick={() => this.toggleDisplayTweet()}
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
            //onClick={() => this.toggleDisplayTweet()}
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
            //onClick={() => this.toggleDisplayTweet()}
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
            //onClick={() => this.toggleDisplayTweet()}
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
            //onClick={() => this.toggleDisplayTweet()}
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
        <RandomTweet
          userImg={this.state.userImg}
          userName={this.state.userName}
          userHandle={this.state.userHandle}
          date={this.state.datePosted}
          tweetBody={this.state.text}
          comments={this.state.comments}
          retweets={this.state.retweets}
          likes={this.state.likes}
        />

        {displayRandomTweet}
      </div>
    );
  }
}

export default RandomPage;
