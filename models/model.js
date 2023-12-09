const mongoose = require('mongoose');
// const mongoose: Declares a constant variable named 'mongoose'.
// = require('mongoose'): Assigns the 'mongoose' module to the variable, allowing the use of Mongoose, an Object Data Modeling (ODM) library for MongoDB.
// it's connects to the MongoDB database using the Mongoose library. 

const dataSchema = new mongoose.Schema({
    // mongoose.Schema() is used to create a new Mongoose schema.

    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
    /*required: true: Specifies that the name field is mandatory and must be present when creating documents based on this schema.
type: String: Indicates that the name field should contain string data.*/
})

/*creates a Mongoose schema using the mongoose.Schema() method. 
This schema defines the structure of data that will be stored in a MongoDB collection.  */

module.exports = mongoose.model('Data', dataSchema)
// is used to export a Mongoose model from a module in Node.js. 

/**Assuming the schema (dataSchema) has been created and represents the structure of a MongoDB document
 *  or collection, this line of code uses Mongoose's model() method to create a model based on the defined schema. */

// mongoose.model() is a Mongoose function that creates a model.

/**module.exports is a Node.js construct that allows a module to expose functionality or data to be used by other modules when they import this module. */

