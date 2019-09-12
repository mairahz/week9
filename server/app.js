const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'; // Connection URL
const dbName = 'mydb'; // Database name
const colName = 'product' // Collection name
const client = new MongoClient(url); // Create a new MongoClient

// Use connect method to connect to the Server
client.connect(function(err) {
    console.log("Connected successfully to the server!");
    const db = client.db(dbName);
    const collection = db.collection(colName);
});
