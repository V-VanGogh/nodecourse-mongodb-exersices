const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');


  var user ={name:{ title: 'Mr', surname: 'papas'}};
  var {title} = user.name;
  console.log(title);

  // const db = client.db('TodoApp')
  //
  // db.collection('Users').insertOne({
  //  name:'Nikos',
  //  age: 29,
  //  location: 'Athens'
  // }, (err, result) =>{
  //  if(err){
  //    return console.log('Unable to insert todo', err);
  //  }
  //  console.log(result.ops[0]._id.getTimestamp());
  // });


  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert  todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined,2));
  // });


  client.close();


});
