const {
    GraphQLID,
    GraphQLString,
    GraphQLInt,    
    GraphQLList,
    GraphQLSchema,
    GraphQLObjectType,
} = require("graphql");

const monsterModel = require('../models/monsterModel');

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

module.exports = (callback) => {

  const root = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
      // monster: {
      //   type: monsterType,
      //   description: 'A monster',
      //   args: {
      //     id: { type: GraphQLID }
      //   },
      //   resolve: () => { return monsterModel.findById(); }
      // },
      monsters: {
        type: new GraphQLList(monsterType),
        description: 'List of All Monsters',
        resolve: () => { return monsterModel.find({}); }
      }
      })
  });  

  const monsterSchema = new GraphQLSchema({
    query: root
    //TODO: mutation: RootMutationType
  });

  callback(root);
  callback(monsterSchema);
};


      

// Construct a schema, using GraphQL schema language
// var monster = new GraphQLObjectType(`
//   type Query {
//     getMonster: Monster 
//   }
// `);

// The root provides a resolver function for each API endpoint
// var root = {
//   getMonster: (name) => {  
//     try{  
//         let monsterSet = new Set(bestiary.get());
    
//         for(var monsterEntry in monsterSet){
//           if(monsterEntry.name === name) {
//           return monsterEntry;
//           }                     
//         }                     
//       } 
//       catch(err){
//         console.log("Monster not found");
//       }                   
//   }                       
// };