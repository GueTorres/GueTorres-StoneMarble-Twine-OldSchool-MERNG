const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const cors = require("cors");
const root = require("./db/monstersAPI");
const monsterSchema = require("./db/monstersAPI").default;
require("dotenv").config({path:__dirname+'/../.env'});
const port = process.env.PORT || 5000;
const Db = process.env.ATLAS_URI;
app.use(cors());
app.use(express.json());
// app.use(require("./routes/bestiary")); may not be necessary

const mongoose = require('mongoose');

mongoose.connect(Db);
mongoose.connection.once('open', () => {
  console.log("OldSchoolDB Connected");
});

app.listen(port);

app.use('/graphql', graphqlHTTP({
  schema: monsterSchema,
  rootValue: root,
  graphiql: true
}));

console.log(`Running GraphQL on http://localhost:${port}/graphql`);
