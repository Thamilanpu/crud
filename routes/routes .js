

const express = require('express');
// The code const express = require('express'); is a common line used in Node.js applications, specifically when using the Express.js framework.


const router = express.Router()
// const router = express.Router() is used to create a modular, mountable set of routes. This code creates an instance of an Express router.
// express.Router() is a method provided by Express to create a new router object.



module.exports = router;
// module.exports = router; specifically exports the router object, making it available for use in other files/modules that import this module.
// module is a special object in Node.js that represents the current module
// exports is an object provided by Node.js to allow you to export functionalities from a module.
// router: This is the instance of the Express router that has been created and configured with routes and middleware.


router.post('/post', async (req, res) => {
   /* router.post('/post', async (req, res) => { ... }) 
   sets up a route handler for POST requests to the '/post' endpoint using the Express router (router).*/


    const data = new Model({
        /*const data = new Model({ ... })
         initializes a new instance of the Mongoose Model, likely defined with certain properties and a schema structure.*/

        name: req.body.name,
        age: req.body.age,
        // req.body contains data sent in the request body (presumably in JSON format).
        
    })

    try {
        const dataToSave = await data.save();
        /*data.save() is an asynchronous function
         used to save the created data object (instance of the Mongoose Model) to the connected MongoDB database.*/
        res.status(200).json(dataToSave)
       /* If the data is successfully saved (dataToSave), a status of 200 (OK) 
       is sent in the response along with the saved data in JSON format using */
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
   /* If an error occurs during the save operation (error), a status of 400 (Bad Request) 
   is sent in the response along with an error message in JSON format using */
})

// getAll
router.get('/getAll', async (req, res) => {
    /*router.get('/getAll', async (req, res) => { ... })
     sets up a route handler for GET requests to the '/getAll' endpoint using the Express router */
    try{
        const data = await Model.find();
        /*nside the route handler, an asynchronous operation is performed using await Model.find().*/

        /*Model.find() is a Mongoose method used to query the database and retrieve data. In this case,
         it fetches all records/documents from the specified Mongoose Model (Model).*/
    
        res.json(data)
        // If the data retrieval is successful (data), it is sent as a JSON response using res.json(data).
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
    // Internal Server ErrorInternal Server Error
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    // This is an asynchronous function that handles the PATCH request.
    try {
        const id = req.params.id;
        // const id = req.params.id;: Extracts the id parameter from the request URL.
        const updatedData = req.body;
        // Retrieves the updated data from the request body. This assumes that the client sends JSON data in the request body.
        const options = { new: true };
       /* Specifies an option object for the update operation. The new: true 
       option tells Mongoose to return the updated document instead of the original one.*/
        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )
        /* await Model.findByIdAndUpdate(id, updatedData, options);: This uses Mongoose's findByIdAndUpdate method to find a document by its ID (id) in the MongoDB database and 
        update it with the updatedData. It returns the updated document as per the specified options. */

        res.send(result)

        // res.send(result): Sends the updated document (result) as the response to the client.
    }

    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
       /* const id = req.params.id;: Extracts the id parameter from the request URL,
        which is used to identify the document to be deleted.*/

        const data = await Model.findByIdAndDelete(id)
        /*const data = await Model.findByIdAndDelete(id);: Uses Mongoose's findByIdAndDelete method to 
        find a document in the database by its ID (id) and delete it. The deleted document (if found) is stored in the data variable. */
        res.send(`Document with ${data.name} has been deleted..`)
/**res.send(Document with ${data.name} has been deleted..): Sends a response back to the client indicating that the document with the specified ID has been deleted.
 *  The data.name is presumed to be a property of the deleted document (assuming the schema includes a name field), and it's included in the response message. */
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


const Model = require('../models/model');
// require('../models/model') is a Node.js require() function used to import modules or files.
// ../model/model represents the path to the file or module that needs to be imported.

