import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// types
import { typeDefs } from './schema.js';

//server info
const server = new ApolloServer({
    typeDefs, // type definition of diffrent types of data etc author, games. think of it as a map for apoollo's structure
    resolvers, // determines response, handles querys by schema type
  });
  

  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);