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

    db.collection('Todos').find({completed: true}).toArray().then((succ) => {
        console.log(JSON.stringify(succ, undefined, 2));
    }, (error) => {
        console.log(error);
    })

    client.close();
});
