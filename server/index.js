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
const { Counter } = require("./Model/Counter.js");

// 1. 모든 API 라우트 먼저
app.post("/api/post/submit", (req, res) => {
  //console.log(req.body);
  let temp = req.body;
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.postNum = counter.postNum;
      const communityPost = new Post(temp);
      communityPost.save().then(() => {
        Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } }).then(
          () => {
            res.status(200).json({ success: true });
          }
        );
      });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
  //const communityPost = new Post({ title: "Test", content: "This is a Test!" });
  // const communityPost = new Post(temp);
  // communityPost
  //   .save()
  //   .then(() => {
  //     res.status(200).json({ success: true });
  //   })
  //   .catch((err) => {
  //     res.status(400).json({ success: false });
  //   });
  //fluffy.save();
  //console.log(silence.name); // 'Silence'
});

app.post("/api/post/list", (req, res) => {
  Post.find()
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, postList: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

app.post("/api/post/detail", (req, res) => {
  Post.findOne({ postNum: Number(req.body.postNum) })
    .exec()
    .then((doc) => {
      console.log("doc::", doc);
      res.status(200).json({ success: true, post: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

app.post("/api/post/edit", (req, res) => {
  let temp = {
    title: req.body.title,
    content: req.body.content,
  };
  Post.updateOne({ postNum: Number(req.body.postNum) }, { $set: temp })
    .exec()
    .then((doc) => {
      console.log("edit doc::", doc);
      res.status(200).json({ success: true, post: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

app.post("/api/post/delete", (req, res) => {
  Post.deleteOne({ postNum: Number(req.body.postNum) })
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

// 2. 정적파일 서빙
app.use(express.static(path.resolve(__dirname, "../client/build/index.html")));
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
