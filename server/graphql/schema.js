const {buildSchema} = require('graphql');
const {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID} = require('graphql');
const monsterGraphQLType = require('./monsterType');
const Monster = require('../models/Monster');

const schema = buildSchema(`
  type Query {
    monster(_id: ID!): Monster
  },
  type Monster {
    _id: ID, 
    name: String,
    AC: Int, 
    HD: Int, 
    Att: String, 
    THAC0: Int, 
    MV: Int, 
    D: Int, 
    W: Int, 
    P: Int, 
    B: Int, 
    S: Int, 
    ML: Int, 
    AL: String, 
    XP: Int, 
    NA: String, 
    TT: String
  }
`);

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    monster: {
      type: monsterGraphQLType,
      args: {_id: {type: GraphQLID}},
      findMonster: (args) => {
        return Monster.findById(args._id);
      },
    },
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
