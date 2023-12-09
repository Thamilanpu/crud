require('dotenv').config();
// require('dotenv'): Imports the 'dotenv' module in a Node.js application.dotenv is a module that loads environment variables from a file named .
// .config(): Invokes the config function from the 'dotenv' module.
// .env created for ignore from the git it is a npm module.It's commonly used to manage sensitive information and configuration variables.


const express = require('express');
// const express: Declares a constant variable named 'express'.
//  require('express'): Assigns the 'express' module to the variable, making Express functionalities available for use.

//the express module and create an instance of the Express application by calling the express() function.

const mongoose = require('mongoose');
// const mongoose: Declares a constant variable named 'mongoose'.
// = require('mongoose'): Assigns the 'mongoose' module to the variable, allowing the use of Mongoose, an Object Data Modeling (ODM) library for MongoDB.

// Mongoose
// This code connects to the MongoDB database using the Mongoose library. The mongoString variable holds the connection string for the MongoDB database
const mongoString = process.env.DATABASE_URL;
// const mongoString: Declares a constant variable named 'mongoString'.
// = process.env.DATABASE_URL;: Assigns the value of the 'DATABASE_URL' environment variable to the 'mongoString' variable.

mongoose.connect(mongoString);
// mongoose.connect: Calls the connect method provided by the Mongoose library.
// (mongoString): Passes the MongoDB connection string, stored in the variable 'mongoString', as an argument to the connect method.

const database = mongoose.connection;
// Declares a constant variable named 'database'.
// mongoose.connection: Refers to the connection object provided by the Mongoose library

database.on('error', (error) => {
    console.log(error)
})
// The database.on('error') event is triggered if there is an error during the connection.


database.once('connected', () => {
    console.log('Database Connected');
})
// The database.once('connected') event is triggered once the connection is successfully established.

const app = express();
app.use(express.json());
// An Express app is created, 
// This line adds middleware to the Express application. It specifically enables the application to parse JSON data in incoming requests. This is common when dealing with APIs that send and receive JSON.
// Express App Listening on Port 3000.

app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})

// The app.listen() method is used to start the Express application and make it listen for incoming requests on port 3000. The callback function logs a message once the server is successfully started.


const routes = require('./routes/routes');
// It imports the route definitions from the './routes/routes' file. 
// Routes are typically used to define the API endpoints and their corresponding handlers.

app.use('/api', routes)
// It tells the Express app to use the routes defined in the 'routes' module 
// when requests with the '/api' prefix are received.

//  code requires the routes file and mounts the routes at the /api path of the server.
//   allows the server to handle HTTP requests for different API endpoints.

