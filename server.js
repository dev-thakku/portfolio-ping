//requiring express
const express = require("express");

//initializing app
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

const url = "https://glitch.com/edit/#!/ossified-caring-nerine";

//Pinging
let count = 0;
setInterval(() => {
  require("node-fetch")(url).then(() =>
    console.log(`[${++count}] kept ${url} alive.`)
  ),
    5 * 60 * 1000;
});

//initializing port
const port = process.env.PORT || 3000;

//listening
app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
