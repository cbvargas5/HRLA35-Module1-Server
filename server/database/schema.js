var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listing = new Schema({
  name: String, // 
  type: String, //stay, experience etc...
  state: {
    hasState: Boolean,
    name: String
  },
  country: String,
  city: String,
  images: [{ image: String }],
});