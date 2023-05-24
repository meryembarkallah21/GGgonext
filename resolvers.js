// Import the necessary modules
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

// Load the protocol buffer definitions for auth.proto and forum.proto
const authProto = grpc.loadPackageDefinition(protoLoader.loadSync('auth.proto'));
const forumProto = grpc.loadPackageDefinition(protoLoader.loadSync('forum.proto'));

// Create gRPC client instances for AuthService and ForumService
const authClient = new authProto.AuthService('localhost:50052', grpc.credentials.createInsecure());
const forumClient = new forumProto.ForumService('localhost:50051', grpc.credentials.createInsecure());

// Define the resolvers
const resolvers = {
  Query: {
    getUser: (parent, args, context) => {
      const { id } = args;
      return new Promise((resolve, reject) => {
        authClient.getUser({ id }, (err, response) => {
          if (err) {
            reject(err);
          } else {
            resolve(response.user);
          }
        });
      });
    },
    getForum: (parent, args, context) => {
      const { id } = args;
      return new Promise((resolve, reject) => {
        forumClient.getForum({ id }, (err, response) => {
          if (err) {
            reject(err);
          } else {
            resolve(response.forum);
          }
        });
      });
    },
    getPosts: (parent, args, context) => {
      const { forumId } = args;
      return new Promise((resolve, reject) => {
        forumClient.getPosts({ forumId }, (err, response) => {
          if (err) {
            reject(err);
          } else {
            resolve(response.posts);
          }
        });
      });
    },
    
    getForums: (parent, args, context) => {
      return new Promise((resolve, reject) => {
        forumClient.getForums({}, (err, response) => {
          if (err) {
            reject(err);
          } else {
            resolve(response.forums);
          }
        });
      });
    },
  },
  Mutation: {
    createUser: (parent, args, context) => {
      const { username, email, password } = args;
      return new Promise((resolve, reject) => {
        authClient.createUser({ username, email, password }, (err, response) => {
          if (err) {
            reject(err);
          } else {
            resolve(response.user);
          }
        });
      });
    },
    createPost: (parent, args, context) => {
      const { content, userId, forumId } = args;
      return new Promise((resolve, reject) => {
        forumClient.createPost({ content, userId, forumId }, (err, response) => {
          if (err) {
            reject(err);
          } else {
            resolve(response.post);
          }
        });
      });
    },
    createForum: (parent, args, context) => {
      const { name } = args;
      return new Promise((resolve, reject) => {
        forumClient.createForum({ name }, (err, response) => {
          if (err) {
            reject(err);
          } else {
            resolve(response.forum);
          }
        });
      });
    },
    login: (parent, args, context) => {
      const { username, password } = args;
      return new Promise((resolve, reject) => {
        authClient.login({ username, password }, (err, response) => {
          if (err) {
            reject(err);
          } else {
            resolve(response.user);
          }
        });
      });
    },
  },
  User: {
    posts: (parent, args, context) => {
      const { id } = parent;
      return new Promise((resolve, reject) => {
        forumClient.getPosts({}, (err, response) => {
          if (err) {
            reject(err);
          } else {
            const userPosts = response.posts.filter((post) => post.user.id === id);
            resolve(userPosts);
          }
        });
      });
    },
  },
  Forum: {
    posts: (parent, args, context) => {
      const { id } = parent;
      return new Promise((resolve, reject) => {
        forumClient.getForum({ id }, (err, response) => {
          if (err) {
            reject(err);
          } else {
            resolve(response.forum.posts);
          }
        });
      });
    },
  },
};

module.exports = resolvers;
