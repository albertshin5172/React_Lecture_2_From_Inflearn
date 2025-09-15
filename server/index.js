const express = require("express");
const { default: mongoose } = require("mongoose");
const path = require("path");
const app = express();
const port = 5000;

require("dotenv").config();
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
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log(`Example app listening on port http://localhost:${port}`);
      console.log(`Connecting MongoDB`);
    })
    .catch((erro) => {
      console.log(`${err}`);
    });
});
