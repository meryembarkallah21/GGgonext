//apiGateway.js
const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'auth', url: 'http://localhost:50052' }, // Replace with the actual URL of your Auth Microservice
    { name: 'forum', url: 'http://localhost:50051' }, // Replace with the actual URL of your Forum Microservice
  ],
});

const server = new ApolloServer({
  gateway,
  subscriptions: false, // Disable subscriptions if not needed
});

server.listen().then(({ url }) => {
  console.log(`API Gateway ready at ${url}`);
});
