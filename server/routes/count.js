module.exports = function(db, app){
  // Route to manage getting the number of products

  app.get('api/count', function(req, res){
    if(!req.body) {
      return res.sendStatus(400);
    }
    const collection = db.collection('product');
    collection.find({}).count((err, count)=>{
      res.send({'count':count});
    });
  });
}