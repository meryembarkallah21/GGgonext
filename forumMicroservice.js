
//forumMicroservice.js
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const { query } = require('./db'); // Assuming your db.js file exports a 'query' function

const packageDefinition = protoLoader.loadSync('forum.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const forumProto = grpc.loadPackageDefinition(packageDefinition).ForumService;

// gRPC methods implementation
const getForum = async (call, callback) => {
  const { id } = call.request;
  try {
    const sql = 'SELECT * FROM forums WHERE id = ?';
    const result = await query(sql, [id]);
    const forum = result[0];

    // Fetch the associated posts for the forum
    const postSql = 'SELECT * FROM posts WHERE forumId = ?';
    const postResult = await query(postSql, [id]);
    const posts = postResult;

    // Construct the Forum message with the fetched data
    const forumMessage = {
      id: forum.id,
      name: forum.name,
      posts: posts.map((post) => ({
        id: post.id,
        content: post.content,
        user: {
          id: post.userId,
          username: '', // Fetch and populate the user details if needed
          email: '', // Fetch and populate the user details if needed
          password: '', // Fetch and populate the user details if needed
        },
      })),
    };

    callback(null, { forum: forumMessage });
  } catch (error) {
    console.error('Error fetching forum:', error);
    callback(error, null);
  }
};

const createForum = async (call, callback) => {
  const { name } = call.request;
  try {
    const sql = 'INSERT INTO forums (name) VALUES (?)';
    const result = await query(sql, [name]);
    const forumId = result.insertId;

    // Construct the Forum message for the created forum
    const forumMessage = {
      id: forumId,
      name: name,
      posts: [],
    };

    callback(null, { forum: forumMessage });
  } catch (error) {
    console.error('Error creating forum:', error);
    callback(error, null);
  }
};

const getForums = async (call, callback) => {
    try {
      const sql = 'SELECT * FROM forums';
      const result = await query(sql);
      const forums = result;
  
      callback(null, { forums });
    } catch (error) {
      console.error('Error fetching forums:', error);
      callback(error, null);
    }
  };
  

const createPost = async (call, callback) => {
  const { content, userId, forumId } = call.request;
  try {
    const sql = 'INSERT INTO posts (content, userId, forumId) VALUES (?, ?, ?)';
    const result = await query(sql, [content, userId, forumId]);
    const postId = result.insertId;

    // Construct the Post message for the created post
    const postMessage = {
      id: postId,
      content: content,
      user: {
        id: userId,
        username: '', // Fetch and populate the user details if needed
        email: '', // Fetch and populate the user details if needed
        password: '', // Fetch and populate the user details if needed
      },
    };

    callback(null, { post: postMessage });
  } catch (error) {
    console.error('Error creating post:', error);
    callback(error, null);
  }
};

const getPosts = async (call, callback) => {
  try {
    const sql = 'SELECT * FROM posts';
    const result = await query(sql);
    const posts = result;

    callback(null, { posts: posts.map((post) => ({
      id: post.id,
      content: post.content,
      user: {
        id: post.userId,
        username: '', // Fetch and populate the user details if needed
        email: '', // Fetch and populate the user details if needed
        password: '', // Fetch and populate the user details if needed
      },
    })) });
  } catch (error) {
    console.error('Error fetching posts:', error);
    callback(error, null);
  }
};

// gRPC server setup
const server = new grpc.Server();
server.addService(forumProto.service, {
  getForum,
  createForum,
  createPost,
  getPosts,
  getForums,
});

// Start the gRPC server
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();

console.log('Forum Microservice running at http://localhost:50051');
