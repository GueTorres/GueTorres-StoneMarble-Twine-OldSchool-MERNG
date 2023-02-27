const express = require("express");
const expressGraphQL = require("express-graphql");
const conn = require("./monsterConn")
const {
    GraphQLID,
    GraphQLString,
    GraphQLInt,    
    GraphQLList,
    GraphQLType,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLObjectType
} = require("graphql")

var monsterSchema = new GraphQLSchema(`
    type Monster {
        "name": String,
        "AC": Int,
        "HD": Int,
        "Att": String,
        "THAC0": Int,
        "MV": Int,
        "D": Int,
        "W": Int,
        "P": Int,
        "B": Int,
        "S": Int,
        "ML": Int,
        "AL": String,
        "XP": Int,
        "NA": String,
        "TT": String
    }
`);

// Construct a schema, using GraphQL schema language
var monster = new GraphQLObjectType(`
  type Query {
    getMonster: Monster 
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  getMonster: (name) => {
    
    
    return 'Hello world!'; //this can return objects as well
  },                       //lets try to return an object like boar
};
const app = express();

app.use('/graphql', expressGraphQL({
  schema: monsterSchema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');