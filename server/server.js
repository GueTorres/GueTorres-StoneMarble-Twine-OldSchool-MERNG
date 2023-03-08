const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const cors = require("cors");
const schema = require('./graphql/schema');

require("dotenv").config({path:__dirname+'/../.env'});
const port = process.env.PORT || 5000;
const Db = process.env.ATLAS_URI;
app.use(cors());
app.use(express.json());
// app.use(require("./routes/bestiary")); may not be necessary

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(Db);
mongoose.connection.once('open', () => {
  console.log("OldSchoolDB Connected");
});
console.log(mongoose.connection.readyState);

//const monsterSchema = require("./db/monstersAPI"); may not be necessary

app.listen(port);

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

console.log(`Running GraphQL on http://localhost:${port}/graphql`);