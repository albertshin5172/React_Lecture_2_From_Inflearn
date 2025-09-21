const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const config = require("./server/config/key.js");
//const fluffy = require("fluffy-module"); // or the correct module name

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./client/build")));
app.use("/image", express.static("./image"));
// 2. 정적파일 서빙
app.use(express.static(path.resolve(__dirname, "./client/build/index.html")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/post", require("./server/Router/post.js"));
app.use("/api/user", require("./server/Router/user.js"));
app.use("/api/reple", require("./server/Router/reple.js"));
// 3. catch-all 라우트 (SPA)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});

/*
  1. post MongoDB Model
  2. Client CSS(Bootstrap, Emotion)
*/

app.listen(port, () => {
  mongoose
    .connect(config.MONGODB_URI)
    .then(() => {
      console.log(`Example app listening on port http://localhost:${port}`);
      console.log(`Connecting MongoDB`);
    })
    .catch((err) => {
      console.log(err);
    });
});
