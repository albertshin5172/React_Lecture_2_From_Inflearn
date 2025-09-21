// if (process.env.NODE_ENV === "production") {
//   //배포상태
//   module.exports = require("./production.js");
// } else {
//   //개발상태
//   module.exports = require("./dev.js");
// }
// server/config/key.js
module.exports = {
  mongoURI: process.env.MONGODB_URI,
  access_key: process.env.ACCESS_KEY,
  secret_key: process.env.SECRET_KEY,
};
