const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

// serve the static files from react app
app.use(express.static(path.join(__dirname, "Client/index.html")));

app.use("/Client", express.static("Client"));

app.get("/", (req, res) => res.send("hello world"));

app.listen(port, () => console.log(`example app is listening port ${port}`));
