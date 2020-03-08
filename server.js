const express = require("express");
const path = require("path");
const app = express();
const port = process.env.port || 5000;
const axios = require("axios");

// serve the static files from react app
app.use(express.static(path.join(__dirname, "client/index.html")));

app.use("/client", express.static("client"));

// app.post("/api/client", (req, res) => {
//   res.send();
// });

// app.post("/api/client", (req, res) => {
//   const config = {
//     auth: {
//       username: "QfBqPxQTfoJxzvu2VNHZX7SBY",
//       password: "qsTipLXWEZJputrqUalA7BXGyCRpYdKVICrYs79ivM3VJo7SJI"
//     }
//   };

//   axios
//     .post("https://api.twitter.com/oauth2/token", config)
//     .then(response => {
//       res.send(response.data);
//       console.log(response.data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

const config = {
  auth: {
    username: "QfBqPxQTfoJxzvu2VNHZX7SBY",
    password: "qsTipLXWEZJputrqUalA7BXGyCRpYdKVICrYs79ivM3VJo7SJI"
  }
};

app.get("/api/client", (req, res) => {
  //get bearer token from twitter w. post
  const config = {
    auth: {
      username: "QfBqPxQTfoJxzvu2VNHZX7SBY",
      password: "qsTipLXWEZJputrqUalA7BXGyCRpYdKVICrYs79ivM3VJo7SJI"
    }
  };

  axios
    .post("https://api.twitter.com/oauth2/token", config)
    .then(response => {
      res.send(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });

  axios
    .get("https://api.twitter.com/1.1/search/tweets.json")
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
