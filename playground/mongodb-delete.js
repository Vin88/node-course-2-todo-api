const MongoClient = require('mongodb').MongoClient;
// Connection url
const url = 'mongodb://localhost:27017';
// TodoApp - Database
// Users - Collection
MongoClient.connect(url+ '/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if(err){
        console.log("Unable to connect");
    }
    console.log("Connected to Mongodb server");

    const db = client.db('TodoApp');

    // Delete Many
    // db.collection('Users').deleteMany({
    //     age: "29",
    // }, (err, result) => {
    //     if(err){
    //         console.log("Unable to insert")
    //     }
    //     console.log(JSON.stringify(result, undefined, 2));
    // });

    // Delete One or findOneAndDelete
    db.collection('Users').deleteOne({
        age: "29",
    }, (err, result) => {
        if(err){
            console.log("Unable to insert")
        }
        console.log(JSON.stringify(result, undefined, 2));
    });
    client.close();
});