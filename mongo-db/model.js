const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

var itemSchema = mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  salePrice:{type: Number, sparse: true},
  sport: String,
  color : String,
  team: String,
  rating: Number,
  num_ratings: Number,
  imageUrl:String,
  gender:String,
  category: String
});

var Items = mongoose.model('Items', itemSchema);
module.exports = Items;
