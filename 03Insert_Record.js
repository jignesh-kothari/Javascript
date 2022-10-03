var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/sampledb2";

MongoClient.connect(url, function(err, db){
	if(err) throw err;
    var dbo = db.db("sampledb2");
    var myobj = {name:"Google Inc", address: "San Josh, Mountain view"};
    dbo.collection("customers").insertOne(myobj, function(err, res){
	    if(err) throw err;
        console.log("1 Document Inserted");
	    db.close();
    });
});