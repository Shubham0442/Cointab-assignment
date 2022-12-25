
const mongoose = require("mongoose");
require("dotenv").config();

const connect = mongoose.connect(process.env.mongodb_url) 


module.exports = { connect }