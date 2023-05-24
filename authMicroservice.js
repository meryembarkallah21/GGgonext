// authMicroservice.js
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const { query } = require('./db'); // Assuming your db.js file exports a 'query' function

const packageDefinition = protoLoader.loadSync('auth.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const authProto = grpc.loadPackageDefinition(packageDefinition).AuthService;

// gRPC methods implementation
const getUser = async (call, callback) => {
  const { id } = call.request;
  try {
    const sql = 'SELECT * FROM users WHERE id = ?';
    const result = await query(sql, [id]);
    const user = result[0];

    callback(null, { user });
  } catch (error) {
    console.error('Error fetching user:', error);
    callback(error, null);
  }
};

const createUser = async (call, callback) => {
  const { username, email, password } = call.request;
  try {
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    const result = await query(sql, [username, email, password]);
    const userId = result.insertId;

    // Construct the User message for the created user
    const userMessage = {
      id: userId,
      username,
      email,
      password,
    };

    callback(null, { user: userMessage });
  } catch (error) {
    console.error('Error creating user:', error);
    callback(error, null);
  }
};

const login = async (call, callback) => {
  const { username, password } = call.request;
  try {
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    const result = await query(sql, [username, password]);
    const user = result[0];

    if (!user) {
      const error = new Error('Invalid username or password');
      console.error('Login failed:', error);
      callback(error, null);
    } else {
      callback(null, { user });
    }
  } catch (error) {
    console.error('Error during login:', error);
    callback(error, null);
  }
};

// gRPC server setup
const server = new grpc.Server();
server.addService(authProto.service, {
  getUser,
  createUser,
  login,
});

// Start the gRPC server
server.bind('0.0.0.0:50052', grpc.ServerCredentials.createInsecure());
server.start();

console.log('Auth Microservice running at http://localhost:50052');
