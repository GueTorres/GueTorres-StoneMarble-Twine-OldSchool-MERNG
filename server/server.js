const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const cors = require("cors");
const root = require("./db/monstersAPI");

require("dotenv").config({path:__dirname+'/../.env'});
const port = process.env.PORT || 5000;
const Db = process.env.ATLAS_URI;
app.use(cors());
app.use(express.json());
// app.use(require("./routes/bestiary")); may not be necessary

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(Db);
mongoose.connection.once('open', async () => {
  await console.log("OldSchoolDB Connected");
});

const monsterSchema = require("./db/monstersAPI");

app.listen(port);

app.use('/graphql', graphqlHTTP({
  schema: monsterSchema,
  rootValue: root,
  graphiql: true
}));

console.log(`Running GraphQL on http://localhost:${port}/graphql`);
