module.exports = function(db, app, ObjectID){
    // Route to update an item.
    var result;
    app.post('/api/update', function(req, res){
        if(!req.body){
            return res.sendStatus(400);
        }
        var objectid = new ObjectID(product.id);
        const collection = db.collection('product');
        collection.updateOne({_id:objectid},{$set:{name:product.name, description:product.description, price:product.price, units:product.units}}, ()=>{
            // Return a response to the client to let them know the delete was successful.
            res.send({'ok':product.id});
        });
    });
}