# GGgonext

GGgonext is an app for gamers to add forums named after their favorite games. Everyone can post their opinions, questions, or ask for help.

## Directory Structure

The directory structure of the GGgonext app is as follows:

- `frontend`: Contains the frontend code for the GGgonext app.
- `node_modules`: Stores the installed packages and their dependencies.
- `apiGateway.js`: Entry point for the API gateway.
- `auth.proto`: Protocol buffer file related to authentication functionality.
- `authMicroservice.js`: Implementation of the authentication microservice.
- `db.js`: Code for connecting to the database.
- `forum.proto`: Protocol buffer file related to forum functionality.
- `forumMicroservice.js`: Implementation of the forum microservice.
- `index.js`: Entry point for the backend server.
- `package-lock.json`: Automatically generated file specifying the exact versions of installed packages.
- `package.json`: Configuration file that includes project metadata and dependencies.
- `README.md`: Documentation file providing an overview of the GGgonext app.
- `resolvers.js`: GraphQL resolvers for handling data queries and mutations.
- `schema.js`: GraphQL schema definition.

## Getting Started

To get started with GGgonext, follow these steps:

1. Install dependencies: Run `npm install` to install the required dependencies.
2. Start the backend server: Run `node index.js` to start the backend server.
3. Start the frontend: Open the `index.html` file in your web browser to access the GGgonext app.

## Technologies Used

GGgonext is built using the following technologies:

-Frontend: The user interface of GGgonext is developed using HTML, CSS, and JavaScript, ensuring a responsive and interactive user experience.

-Backend: The backend of GGgonext is powered by Node.js, a versatile and efficient JavaScript runtime. It enables the handling of server-side logic, data processing, and integration with external services.

-Database: GGgonext utilizes MySQL, a popular and reliable relational database management system. MySQL enables efficient storage, retrieval, and management of user data, forum content, and other relevant information.

-GraphQL: GGgonext leverages GraphQL, a powerful query language for APIs, to provide a flexible and efficient approach to data retrieval and manipulation. GraphQL allows clients to request and receive precisely the data they need, reducing over-fetching and under-fetching of data.

-gRPC: GGgonext incorporates gRPC, a high-performance, open-source remote procedure call (RPC) framework. gRPC enables efficient and secure communication between the microservices within GGgonext, facilitating seamless interactions and data exchange.

-RESTful: GGgonext also supports a RESTful architecture for API design, adhering to the principles of representational state transfer. RESTful APIs provide a standardized and intuitive way for clients to interact with the backend services of GGgonext.

By combining these technologies, GGgonext offers a comprehensive and robust platform for gamers to create and participate in game-specific forums, share their opinions, ask questions, and seek assistance from the gaming community.

##Structure 

*apiGateway.js: This file is likely the implementation of an API gateway, which acts as a single entry point for all API requests and handles routing and aggregation of data from various microservices.
*auth.proto: This file is a protocol buffer definition file for the authentication microservice, which defines the structure and communication protocol for the gRPC-based authentication service.
*authMicroservice.js: This file likely contains the implementation of the authentication microservice, responsible for handling user authentication and authorization logic.
*db.js: This file likely contains the code for establishing a connection to the MySQL database and providing utility functions for interacting with the database, such as querying and data manipulation.
*forum.proto: This file is a protocol buffer definition file for the forum microservice, which defines the structure and communication protocol for the gRPC-based forum service.
*forumMicroservice.js: This file likely contains the implementation of the forum microservice, handling forum-related operations like creating forums, retrieving forum data, and managing posts within forums.
*index.js: This file is the entry point of the application. It is responsible for starting the server, setting up routes, and initializing the necessary components for the GGgonext app to run.
*resolvers.js: This file likely contains the GraphQL resolvers, which define the behavior for each GraphQL query and mutation, mapping them to the corresponding data fetching and manipulation functions.
*schema.js: This file likely contains the GraphQL schema definition for the GGgonext app, specifying the available types, queries, and mutations that can be used in GraphQL operations.

## License


This project is developed by Meryem Barkallah and licensed under the [MIT License](LICENSE).



