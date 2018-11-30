const { Product } = require("./models");
const { generateProduct } = require("../utils/mockData.js");
var fs = require('fs');
var copyTo = require('pg-copy-streams').to;
var pg = require('pg');
var moment = require('moment')
const categoriesForMock = [
  { "name": "Shoe", "numItemsToGenerate": 900 },
  { "name": "Sandle", "numItemsToGenerate": 20 },
  { "name": "Hoodie", "numItemsToGenerate": 20 },
  { "name": "Pants", "numItemsToGenerate": 20 },
  { "name": "Backpack", "numItemsToGenerate": 20 },
  { "name": "Hat", "numItemsToGenerate": 20 }
];

// function delay(){
//   return new Promise(resolve => setTimeout(resolve,100))
// }
// const f2 = async function(category){
//   await delay()
//   return generateProduct(category.name);
// }
// const f1 = async function(){
//   Product.sync({ force: true }).then(() => {
//     categoriesForMock.forEach(async (category) => {
//       var promises = []
//       for (let i = 0; i < category.numItemsToGenerate; i += 1) {
//         var temp = await f2(category)
//         console.log(temp)
//         //const temp = await f2(category)
//       }
//     })
//   });
// }
// f1()

var one_million = 666666;
var start = 6666668;
var stop = start + one_million;
var i = 8
categoriesForMock.forEach((category) => {
  writeVideoInfoData(start, stop, category);
  function writeVideoInfoData(start, stop, category){
    var tempname = category.name
    var header = 'id|name|price|salePrice|sport|color|team|rating|num_ratings|imageUrl|gender|category|createdAt|updatedAt\n';
    var data = header;
    for (var j = start; j <= stop; j++){
      var obj = generateProduct(tempname);
      if (j % 100000 === 0) { console.log('j: ', j) }
      var id = j;
      var name = obj.name;
      var price = obj.price;
      var salePrice = obj.salePrice;
      var sport = obj.sport;
      var color = obj.color;
      var team = obj.team;
      var rating = obj.rating;
      var num_ratings = obj.num_ratings
      var imageUrl = obj.imageUrl
      var gender = obj.gender
      var category = obj.category
      var created_At = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
      var updated_At = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
      var csvString = `${id}|${name}|${price}|${salePrice}|${sport}|${color}|${team}|${rating}|${num_ratings}|${imageUrl}|${gender}|${category}|${created_At}|${updated_At}\n`;
      data += csvString;
    }
    console.log(`now writing file ${i}`)
    fs.writeFileSync(`./data${i}.csv`, data);
    console.log(`done writing file ${i}, ${stop - start} lines`)
    i++
  }
  start += one_million+1;
  stop += one_million;
});
