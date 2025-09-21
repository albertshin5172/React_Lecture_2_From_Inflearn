require("dotenv").config(); // .env 파일 로드

// server/index.js
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

// 환경변수에서 MongoDB URI, AWS 키 가져오기
const config = require("./config/key.js");

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 정적 파일 서빙 (React build)
app.use(express.static(path.join(__dirname, "../client/build")));

// 이미지 파일 서빙
app.use("/image", express.static(path.join(__dirname, "../image")));

// API 라우터
app.use("/api/post", require("./Router/post.js"));
app.use("/api/user", require("./Router/user.js"));
app.use("/api/reple", require("./Router/reple.js"));

// SPA catch-all route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// 서버 시작 & MongoDB 연결
mongoose
  .connect(config.mongoURI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
