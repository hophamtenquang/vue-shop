const mongoose = require("mongoose");
var MongoClient = require('mongodb').MongoClient;
const User = require("./api/models/user");

var uri = "mongodb://hophamtenquang:RedmiNote3@node-shop-v1-shard-00-00-41yyo.gcp.mongodb.net:27017,node-shop-v1-shard-00-01-41yyo.gcp.mongodb.net:27017,node-shop-v1-shard-00-02-41yyo.gcp.mongodb.net:27017/test?ssl=true&replicaSet=node-shop-v1-shard-0&authSource=admin&retryWrites=true";


// MongoClient.connect(uri, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

MongoClient.connect(uri, function(err, client) {
  // client.db("node-shop-v1").createCollection("test", function(err, res) {
  //   if (err) throw err;
  //   console.log("Collection created!");
  // });

   const collection = client.db("node-shop-v1").collection("test");
   var doc1 = {'hello':'doc1'};
   var doc2 = {'hello':'doc2'};
   var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];

   collection.insert(doc1);

   collection.insert(doc2, {w:1}, function(err, result) {});

   collection.insert(lotsOfDocs, {w:1}, function(err, result) {
     console.log(result);
     client.close();
   });
});
