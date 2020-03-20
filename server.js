const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const axios = require("axios");
require("dotenv").config();

// serve the static files from react app
app.use(express.static(path.join(__dirname, "Client/build")));

//GETS search results
app.get("/api/random", async (req, res) => {
  const user = req.query.screen_name;

  const token = process.env.SECRET_KEY;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  await axios
    .get(
      `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${user}`,
      config
    )
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    });
});

//GETS random tweets from top 5 users.
app.get("/api/search", async (req, res) => {
  search = req.query.q;

  const token = process.env.SECRET_KEY;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  await axios
    .get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${search}&result_type=mixed`,
      config
    )

    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "Client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`listening port ${PORT}`));
