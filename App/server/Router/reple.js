var express = require("express");
var router = express.Router();
const { Post } = require("../Model/Post.js");
const { Reple } = require("../Model/Reple.js");
const { User } = require("../Model/User.js");

router.post("/submit", async (req, res) => {
  try {
    let temp = {
      reple: req.body.reple,
      postId: req.body.postId,
    };
    const userInfo = await User.findOne({ uid: req.body.uid }).exec();
    temp.author = userInfo._id;
    const NewReple = new Reple(temp);
    await NewReple.save();
    await Post.findOneAndUpdate(
      { _id: req.body.postId },
      { $inc: { repleNum: 1 } }
    ).exec();
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
});

router.post("/getReple", async (req, res) => {
  try {
    const repleInfo = await Reple.find({ postId: req.body.postId })
      .populate("author")
      .exec();
    return res.status(200).json({
      success: true,
      repleList: repleInfo,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }
});

router.post("/edit", async (req, res) => {
  let temp = {
    postId: req.body.postId,
    reple: req.body.reple,
    uid: req.body.uid,
  };
  try {
    await Reple.findOneAndUpdate(
      { _id: req.body.repleId },
      { $set: temp }
    ).exec();
    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }
});

router.post("/delete", async (req, res) => {
  try {
    await Reple.deleteOne({ _id: req.body.repleId }).exec();
    await Post.findOneAndUpdate(
      { _id: req.body.postId },
      { $inc: { repleNum: -1 } }
    ).exec();
    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }
});

/*
//async/await
router.post("/submit", async (req, res) => {
  try {
    let temp = {
      reple: req.body.reple,
      postId: req.body.postId,
    };
    const userInfo = await User.findOne({ uid: req.body.uid }).exec();
    temp.author = userInfo._id;
    const NewReple = new Reple(temp);
    await NewReple.save();
    await Post.findOneAndUpdate(
      { _id: req.body.postId },
      { $inc: { repleNum: 1 } }
    ).exec();
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(400).json({ success: false, error: err });
  }
});

router.post("/getReple", async (req, res) => {
  try {
    const repleInfo = await Reple.find({ postId: req.body.postId })
      .populate("author")
      .exec();
    return res.status(200).json({
      success: true,
      repleList: repleInfo,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }
});

router.post("/edit", async (req, res) => {
  let temp = {
    postId: req.body.postId,
    reple: req.body.reple,
    uid: req.body.uid,
  };
  try {
    await Reple.findOneAndUpdate(
      { _id: req.body.repleId },
      { $set: temp }
    ).exec();
    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }
});

router.post("/delete", async (req, res) => {
  try {
    await Reple.deleteOne({ _id: req.body.repleId }).exec();
    await Post.findOneAndUpdate(
      { _id: req.body.postId },
      { $inc: { repleNum: -1 } }
    ).exec();
    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }
});
*/

module.exports = router;
