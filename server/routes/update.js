module.exports = function(db, app, ObjectID){
    // Route to update an item.
    var result;
    app.post('/api/update', function(req, res){
        if(!req.body){
            return res.sendStatus(400);
        }
        product = req.body;
        var objectid = new ObjectID(product._id);
        console.log(objectid)
        const collection = db.collection('product');
        collection.updateOne({_id:objectid},{$set: {id:product.id, name:product.name, desc:product.desc, price:product.price, units:product.units}}, ()=>{
            // Return a response to the client to let them know the update was successful.
            res.send({'ok':product});
        });
    });
}