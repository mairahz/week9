module.exports = function(collection, callback){
      collection.find({}).toArray((err, data) => {
        console.log("Finding products")
        console.log(data);
      }); 
}