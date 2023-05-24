const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    posts: [Post!]!
  }

  type Forum {
    id: ID!
    name: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    content: String!
    user: User!
    forum: Forum!
  }

  type Query {
    getUser(id: ID): User
    getForum(id: ID!): Forum
    getPosts: [Post!]!
    getForums: [Forum!]! # Add the 'forums' query here

  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
    createPost(content: String!, userId: ID!, forumId: ID!): Post!
    createForum(name: String!): Forum!
    login(username: String!, password: String!): User!
  }
`;

module.exports = typeDefs;
