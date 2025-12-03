// Importing dependencies
const express = require("express");
const mongoose = require("mongoose");
const Car = require("./models/car");
const cors = require("cors");
require("dotenv").config();

// Initializers
const server = express();
const { DB_URI } = process.env;
const port = 3000;

server.use(cors);

// Start the server
mongoose
    .connect(DB_URI)
    .then(() => {
        server.listen(port, () => {
            console.log(`Connected to database\nServer is listening on ${port}`);
        });
    })
    .catch((error) => console.log(error));

// Routes
server.get("/", (request, response) => {
    response.send("Server is Live");
});

server.get("/cars", async (request, response) => {
    console.log("here");
    const cars = await Car.find();
    response.send(cars);
});
