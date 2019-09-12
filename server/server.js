const express = require('express'); // Import express.js
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

// Define port used for server
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const url = 'mongodb://localhost:27017';
MongoClient.connect(url, {poolSize:10, useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  if(err) {return console.log(err)}
  
  const dbName = 'mydb';
  const db = client.db(dbName);

  require('./routes/add.js')(db, app);
  require('./routes/read.js')(db, app);
  require('./routes/count.js')(db, app);
  require('./routes/valid.js')(db, app);
  require('./routes/remove.js')(db, app, ObjectID);
  require('./routes/update.js')(db, app, ObjectID);
  const server = require('./listen.js');
  // Start server listening for requests
  server.listen(http, PORT);


});
