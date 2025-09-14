const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});

app.get("/express", (req, res) => {
  res.send("Hello Express!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
