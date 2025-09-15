const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = 5000;
//const fluffy = require("fluffy-module"); // or the correct module name

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Post } = require("./Model/Post.js");

// 1. 모든 API 라우트 먼저
app.post("/api/test", (req, res) => {
  console.log(req.body);
  const communityPost = new Post({ title: "Test", content: "This is a Test!" });
  communityPost.save().then(() => {
    res.status(200).json({ success: true, text: "Hello" });
  });
  //fluffy.save();
  //console.log(silence.name); // 'Silence'
});

// 2. 정적파일 서빙
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. catch-all 라우트 (SPA)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});

/*
  1. post MongoDB Model
  2. Client CSS(Bootstrap, Emotion)
*/

app.listen(port, () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log(`Example app listening on port http://localhost:${port}`);
      console.log(`Connecting MongoDB`);
    })
    .catch((err) => {
      console.log(err);
    });
});
