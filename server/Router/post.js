var express = require("express");
var router = express.Router();

const { Post } = require("../Model/Post.js");
const { Counter } = require("../Model/Counter.js");

// 1. 모든 API 라우트 먼저
router.post("/submit", (req, res) => {
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

router.post("/list", (req, res) => {
  Post.find()
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, postList: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post("/detail", (req, res) => {
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

router.post("/edit", (req, res) => {
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

router.post("/delete", (req, res) => {
  Post.deleteOne({ postNum: Number(req.body.postNum) })
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

module.exports = router;
