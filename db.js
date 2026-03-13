// Imports client class from pg lib
const { Client } = require('pg')
// Loads env variables from .env into process.env
require('dotenv').config()

// Create a postgres client instance
const client = new Client ({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
})

// Attempts to open a TCP connection to postgres which returns a promise
client.connect()
    // runs if promise resolves
    .then(() => console.log("Connected to PostgreSQL"))
    // runs if promise rejects or fails
    .catch(err => console.error("Connection Error: ", err) )

module.exports = client