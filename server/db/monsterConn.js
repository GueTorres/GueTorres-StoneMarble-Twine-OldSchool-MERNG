const { MongoClient } = require("mongodb");
require("dotenv").config({path:__dirname+'/../.env'});
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    try{
      client.connect();
      console.log("Successfully connected to OldSchoolDB."); 
    } catch(err){
      console.error(err);
    }
  },
 
  getDb: function () {
    return _db;
  },
};