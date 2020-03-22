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

  const url = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${user}`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  await axios
    .get(url, config)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get("/api/search", async (req, res) => {
  const token = await getToken.getToken();

  const search = req.query.q;

  const url = `https://api.twitter.com/1.1/search/tweets.json?q=${search}&result_type=mixed`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  await axios
    .get(url, config)

    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "Client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`listening port ${PORT}`));
