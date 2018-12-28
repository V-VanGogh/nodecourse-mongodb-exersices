//external libraries
const expect = require('expect');
const request = require('supertest');

//local files
const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {User} = require('./../models/user');

//dummy todos
const todos =[{
  text: 'First todo'
},{
  text: 'Second todo'
}];

//delete date to db befre run
// beforeEach((done) => {
//   Todo.remove({}).then(() => done());
// });

//insert the dummy todos to db
beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('Post /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test text';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res) => {
      expect(res.body.text).toBe(text);
    })
    .end((err,res) => {
      if(err) {
        return done(err);
      }

      Todo.find().then((todos) => {
        expect(todos.length).toBe(3);
        done();
      }).catch((e) => done(e));
    });

  });
});


describe('GET /todos', () => {
  it('should get all the todos',(done) => {
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res) => {
      expect(res.body.todos.length).toBe(2);
    })
    .end(done);

  });
});
