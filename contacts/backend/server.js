// Initializing Server
const express = require("express");
const server = express();
const port = 3000;
const mongoose = require("mongoose"); // import mongoose
require("dotenv").config(); // import dotenv
const { DB_URI } = process.env; // To grab the same variable from the dotenv file
const cors = require("cors"); // For disabling default browser security
const Contact = require("./models/contact"); // importing the model schema

// Middleware
server.use(express.json()); // to ensure the data is transmitted as json
server.use(express.urlencoded({ extended: true })); // to ensure data is encoded and decoded while transmission
server.use(cors());

// Database connection and server listening
mongoose
    .connect(DB_URI)
    .then(() => {
        server.listen(port, () => {
            console.log(`Database is connected\nServer is listening on ${port}`);
        });
    })
    .catch((error) => console.log(error.message));

// Routes
// Root route
server.get("/", (request, response) => {
    response.send("Server is Live!");
});

// To GET all the data from contacts collection
server.get("/contacts", async (request, response) => {
    try {
        const contacts = await Contact.find();
        response.send(contacts);
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
});
