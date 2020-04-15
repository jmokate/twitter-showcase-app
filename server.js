const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const axios = require("axios");
const getToken = require("./getToken");
require("dotenv").config();

app.use(express.static(path.join(__dirname, "Client/build")));

app.get("/api/random", async (req, res) => {
  const token = await getToken.getToken();

  const user = req.query.screen_name;

  const url = `https://api.twitter.com/1.1/statuses/user_timeline.json`;

  const config = {
    params: {
      screen_name: user
    },
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  await axios
    .get(url, config)
    .then(response => {
      const tweets = response.data;
      const selectedTweet = tweets[Math.floor(Math.random() * tweets.length)];
      const randomTweet = {
        userImg: selectedTweet.user.profile_image_url,
        tweetBody: selectedTweet.text,
        datePosted: selectedTweet.created_at,
        userName: selectedTweet.user.name,
        userHandle: selectedTweet.user.screen_name,
        retweets: selectedTweet.retweet_count,
        likes: selectedTweet.favorite_count
      };
      res.send(randomTweet);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send({ error: error });
    });
});

app.get("/api/search", async (req, res) => {
  const token = await getToken.getToken();

  const search = req.query.q;

  const url = `https://api.twitter.com/1.1/search/tweets.json`;

  const config = {
    params: {
      q: search,
      result_type: "mixed"
    },
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  await axios
    .get(url, config)
    .then(response => {
      const tweets = response.data.statuses.map(tweet => {
        return {
          id: tweet.id,
          userImg: tweet.user.profile_image_url,
          tweetBody: tweet.text,
          datePosted: tweet.created_at,
          userName: tweet.user.name,
          userHandle: tweet.user.screen_name,
          retweets: tweet.retweet_count,
          likes: tweet.favorite_count
        };
      });
      res.send(tweets);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send({ error: error });
    });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "Client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`listening port ${PORT}`));
