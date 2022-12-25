const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   first : { type : String, required : true},
   last : { type : String, required : true},
   gender : { type : String, required : true},
   avatar : { type : String, required : true},
   email : { type : String, required : true},
   city : { type : String, required : true},
   country : { type : String, required : true},
});

const User = mongoose.model("user", userSchema);

module.exports = { User };
