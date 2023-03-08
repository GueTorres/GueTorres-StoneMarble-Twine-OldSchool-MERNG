const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt} = graphql;

const monsterType = new GraphQLObjectType({  
    name: 'Monster',
    description: 'This represents a monster',
    fields: () => ({ 
      _id: { type: GraphQLID }, 
      name: { type: GraphQLString },
      AC: { type: GraphQLInt }, 
      HD: { type: GraphQLInt }, 
      Att: { type: GraphQLString }, 
      THAC0: { type: GraphQLInt }, 
      MV: { type: GraphQLInt }, 
      D: { type: GraphQLInt }, 
      W: { type: GraphQLInt }, 
      P: { type: GraphQLInt }, 
      B: { type: GraphQLInt }, 
      S: { type: GraphQLInt }, 
      ML: { type: GraphQLInt }, 
      AL: { type: GraphQLString }, 
      XP: { type: GraphQLInt }, 
      NA: { type: GraphQLString }, 
      TT: { type: GraphQLString }
    })  
  });

module.exports = monsterType;