const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');

  const db = client.db('TodoApp')

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c1b5ed6873475221c6b3527')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log('Unable to fetch data');
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // },(err) => {
  //   console.log('Unable to fetch data');
  // });

  db.collection('Users').find({age : { $lt : 30 }}).count().then((count) => {
    console.log(`Todos count: ${count}`);
  },(err) => {
    console.log('Unable to fetch data');
  });



  client.close();


});
