const db  = require('./index.js');
const Items = require('./model.js');
const faker = require('faker')
var csv = require("fast-csv");
var csvfile = __dirname + "/../data12.csv";

var LineInputStream = require("line-input-stream"),
    fs = require("fs"),
    async = require("async"),
    mongoose = require("mongoose"),
    Schema = mongoose.Schema;
var stream = LineInputStream(fs.createReadStream(csvfile,{ flags: "r" }));


var csvStream = csv()
        .on("data", function(data){
          data = data[0].split('|')
          var sale = 0
          if(data[3] == 'null'){
            sale = 400
          } else{
            sale = data[3]
          }
         var item = new Items({
              id: data[0],
              name: data[1],
              price: data[2],
              salePrice: sale,
              sport:data[4],
              color:data[5],
              team:data[6],
              rating:data[7],
              num_ratings:data[8],
              imageUrl:data[9],
              gender:data[10],
              category: data[11],

         });

          item.save(function(error){

            console.log(item);

              if(error){
                   throw error;
              }
          });
    }).on("end", function(){
          console.log(" End of file import");
    });
    stream.setDelimiter('|')
    stream.pipe(csvStream);
