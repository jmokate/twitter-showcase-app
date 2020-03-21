const axios = require("axios");
require("dotenv").config();

const KEY = process.env.KEY;
const SECRET = process.env.SECRET;

const url = "https://api.twitter.com/oauth2/token";

const data = "grant_type=client_credentials";

const config = {
  auth: {
    username: KEY,
    password: SECRET
  },
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  }
};

const getToken = async () => {
  return await axios
    .post(url, data, config)
    .then(response => {
      return response.data.access_token;
    })
    .catch(error => {
      console.log(error);
    });
};

module.exports = { getToken };
