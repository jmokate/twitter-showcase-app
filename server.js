const express = require("express");
const path = require("path");
const app = express();
const port = process.env.port || 5000;
const axios = require("axios");
require("dotenv").config();

// serve the static files from react app
app.use(express.static(path.join(__dirname, "client/index.html")));

app.use("/client", express.static("client"));

app.get("/api/random/:userName", (req, res) => {
  const userName = req.query.userName;
  console.log(userName);
  res.send("username is " + userName);
  console.log(req.query.userName);
});

app.get("/api/client", async (req, res) => {
  //get bearer token from twitter w. post
  const user = JSON.stringify(req.query);
  console.log("user is" + user);

  const token = process.env.SECRET_KEY;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  await axios
    .get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${user}&result_type=mixed`,
      config
    )
    .then(response => {
      res.send(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    });
});

app.listen(port, () => console.log(`example app is listening port ${port}`));
