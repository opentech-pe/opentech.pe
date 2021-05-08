require("dotenv").config();
module.exports = {
  env: {
    BASE_PATH: process.env.BASE_PATH,
  },
  target: 'serverless'
}