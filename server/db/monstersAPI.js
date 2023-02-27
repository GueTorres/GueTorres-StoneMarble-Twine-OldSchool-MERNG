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

const monsterType = new GraphQLObjectType({  
    name: 'Monster',
    description: 'This represents a monster',
    fields: () => ({
      id: { type: GraphQLID }, 
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

const root = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    monster: {
      type: monsterType,
      description: 'A Monster',
      args: {
        id: { type: GraphQLID }
      },
      resolve: (parent, args) => monsters.find(monster => monster.name === args.name)
    },
    monsters: {
      type: new GraphQLList(monsterType),
      description: 'List of All Monsters',
      resolve: () => monsters
    }
  })
});

const monsterSchema = new GraphQLSchema({
  query: root
  //mutation: RootMutationType
})

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