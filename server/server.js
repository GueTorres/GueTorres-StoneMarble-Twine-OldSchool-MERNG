const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const cors = require("cors");
const monsterSchema = require("./db/monstersAPI");
require("dotenv").config({path:__dirname+'/../.env'});
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/bestiary"));
// get driver connection
const dbo = require("./db/monsterConn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
    
  })
});

app.use('/graphql', graphqlHTTP({
  schema: monsterSchema,
  graphiql: true,
}));

console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`);
