const MongoClient = require('mongodb').MongoClient;
// Connection url
const url = 'mongodb://localhost:27017';
//Connect AWS URL or heroku URL, callback function
//db - Read & write data in v2
//client in v3
MongoClient.connect(url+ '/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if(err){
        console.log("Unable to connect");
    }
    console.log("Connected to Mongodb server");

    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         console.log("Unable to insert")
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.collection('Users').insertOne({
        name: "Vinothini",
        age: "26",
        location: "Bangalore"
    }, (err, result) => {
        if(err){
            console.log("Unable to insert")
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    })
    client.close();
});
