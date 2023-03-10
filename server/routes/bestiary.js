const express = require("express");
 
// monsterRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /monster.
const monsterRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/monsterConn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the monsters.
monsterRoutes.route("/bestiary").get(function (req, res) {
 let db_connect = dbo.getDb("OldSchoolDB");
 db_connect
   .collection("Monsters")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single monster by id
monsterRoutes.route("/bestiary/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("Monsters")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you create a new monster.
monsterRoutes.route("/bestiary/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   name: req.body.name,
   position: req.body.position,
   level: req.body.level,
 };
 db_connect.collection("Monsters").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a monster by id.
monsterRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
     name: req.body.name,
     position: req.body.position,
     level: req.body.level,
   },
 };
 db_connect
   .collection("Monsters")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 monster updated");
     response.json(res);
   });
});
 
// This section will help you delete a monster
monsterRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("Monsters").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 monster deleted");
   response.json(obj);
 });
});
 
module.exports = monsterRoutes;