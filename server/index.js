const express = require("express");
const { default: mongoose } = require("mongoose");
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
  mongoose
    .connect(
      //"mongodb+srv://albert5172:<db_password>@cluster0.cfrf9o2.mongodb.net/"
      "mongodb+srv://albert5172:FCHeZjT4mhfv0lmf@cluster0.cfrf9o2.mongodb.net/"
    )
    .then(() => {
      console.log(`Example app listening on port http://localhost:${port}`);
      console.log(`Connecting MongoDB`);
    })
    .catch((erro) => {
      console.log(`${err}`);
    });
});
