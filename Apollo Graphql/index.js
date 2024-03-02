const { ApollServer } = require("apollo-server-express");

const express = require("express");

const app = express();

const server = new ApollServer({ typeDefs, resolvers});

server.applyMiddleware({ app });

app.listen({ port: 3001}, () => {
  console.log("SERVER RUNNING ON PORT 3001")
});


// Typedef = defining what feild and columns that get filled out.
// Resolvers = are used to complete requests that typedef makes.