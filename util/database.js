const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let _db;    
const mongoConnect = (callback) =>{
    MongoClient.connect('mongodb+srv://asgharali:uoC4AcskoAeuT2zh@cluster0.a9tvpbb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(client =>{
        console.log('-----------------------CONECTED-----------------------------------');
        _db = client.db();
        callback()
    }).catch(err =>{
        console.log(err);
    })
}

const getDb = () =>{
    if(_db){
        return _db;
    }
    throw 'No database found';
}

exports.mongodb = mongodb;
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
// monogo credentails asgharali uoC4AcskoAeuT2zh