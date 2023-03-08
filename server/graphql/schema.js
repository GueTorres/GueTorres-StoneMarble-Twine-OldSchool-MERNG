const {buildSchema} = require('graphql');
const {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID} = require('graphql');
const monsterGraphQLType = require('./monsterType');
const Monster = require('../models/Monster');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    monster: {
      type: monsterGraphQLType,
      args: {_id: {type: GraphQLID}},
      resolve(args) {
        return Monster.findById(args._id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
