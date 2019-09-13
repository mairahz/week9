const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'; // Connection URL
const dbName = 'mydb'; // Database name
const colName = 'product' // Collection name
const client = new MongoClient(url); // Create a new MongoClient
const getList = require('./getList');
const docArray = [
                {id: 1,name: "Cat",desc: "A small grey cat.", price: 150.00, units: 1},
                {id: 2,name: "Piano",desc: "A small electric piano.", price: 699.00, units: 10},
                {id: 3,name: "Guitar",desc: "An acoustic guitae.", price: 200.00, units: 6}
                ];

// Use connect method to connect to the Server
client.connect(function(err) {
    console.log("Connected successfully to the server!");
    const db = client.db(dbName);
    const collection = db.collection(colName);
    getList(collection);
});
