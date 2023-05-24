const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

// Create an Express app
const app = express();

// Create gRPC client instances for AuthService and ForumService
const authProto = grpc.loadPackageDefinition(protoLoader.loadSync('auth.proto'));
const forumProto = grpc.loadPackageDefinition(protoLoader.loadSync('forum.proto'));
const authClient = new authProto.AuthService('localhost:50052', grpc.credentials.createInsecure());
const forumClient = new forumProto.ForumService('localhost:50051', grpc.credentials.createInsecure());

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    authClient,
    forumClient,
  }),
});

async function startServer() {
  // Start the Apollo Server
  await server.start();

  // Apply the Apollo Server as middleware to the Express app
  server.applyMiddleware({ app });

  // Start the combined server
  app.listen({ port: 5000 }, () => {
    console.log(`Server running at http://localhost:5000${server.graphqlPath}`);
  });
}

// Start the server
startServer().catch((err) => {
  console.error('Failed to start the server:', err);
});
