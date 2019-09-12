module.exports = function(db, app){
    // Route to get list of all items from the database.
    app.get('/api/read', function(req, res){
        const collection = db.collection('product');
        collection.find({}).toArray((err, data) => {
            console.log(data)
            res.send(data);
        });
    });
}