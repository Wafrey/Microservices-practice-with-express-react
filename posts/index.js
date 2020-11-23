const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");

const app = express();
app.use(bodyParser.json());

// This will simulte posts table in simulated DB
const posts = {};

app.get("posts", (req, res) => {
  res.send(posts);
});

app.post("posts", (req, res) => {
  // generate random id to handle creation of post
  const id = randomBytes(4).toString("hex");

  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  res.status(201).send(post[id]);
});

app.listen(4000, () => {
  console.log("Listen on port 4000");
});
