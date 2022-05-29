
import express from 'express';
import bodyParser from 'body-parser';
import { body, validationResult } from 'express-validator';
import { v4 as uuid } from 'uuid';
import User from './models/User/User.js';

const app = express();
const port = 3000;

let users = [];

// create application/json parser
// var jsonParser = bodyParser.json();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const render = () => (
  '<h1>Add</h1>' +
  '<form method="POST" action="/add">' +
  '<input type="text" name="username" value="" />' +
  '<input type="password" name="password" value="" />' +
  '<input type="submit" value="Add" />' +
  '</form>' +
  '<h1>Delete</h1>' +
  '<form method="POST" action="/delete">' +
  '<input type="number" name="id" value="0" />' +
  '<input type="submit" value="Delete" />' +
  '</form>' +
  '<h1>Update</h1>' +
  '<form method="POST" action="/update">' +
  '<input type="number" name="id" value="0" />' +
  '<input type="text" name="username" value="" />' +
  '<input type="submit" value="Update" />' +
  '</form>' +
  '<h1>View</h1>' +
  '<table>' +
    users.map((user) => user.render()).join() +
  '</table>'
);

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => {
  console.log('get');

  res.send(render());
});

app.post('/', (req, res) => {
  console.log('get');

  res.send(render());
});

// app.post('/', urlencodedParser, (req, res) => {
app.post('/add', (req, res) => {
  console.log('post');
  console.log(req.body.username);
  // console.log(body('username'));
  users.push(new User(
    uuid(),
    req.body.username,
    req.body.password,
    '',
    '',
    '',
    '',));

  // console.log(body('username').toDate());
  const errors = validationResult(req);
  // console.log(errors.formatter(''));

  // if (!errors.isEmpty()) {
  //   console.log(req.params);
  // }

  let usersResult = '';
  for (let index = 0; index < users.length; index++) {
    usersResult += index + ' ' + users[index].username + '<br/>';
  }

  // console.log(req.params);
  res.send(render());
});

// app.post('/update', urlencodedParser, (req, res) => {
app.post('/update', (req, res) => {
  console.log('post');
  console.log(req.body.username);
  // console.log(body('username'));
  users = users.map((user) => {
    if (user.id == req.body.id) {
      user.username = req.body.username;
    }
    return user;
  });

  // console.log(body('username').toDate());
  const errors = validationResult(req);
  // console.log(errors.formatter(''));

  // if (!errors.isEmpty()) {
  //   console.log(req.params);
  // }

  let usersResult = '';
  for (let index = 0; index < users.length; index++) {
    usersResult += index + ' ' + users[index].username + '<br/>';
  }

  // console.log(req.params);
  res.send(render());
});

// app.post('/update', urlencodedParser, (req, res) => {
app.post('/delete', (req, res) => {
  console.log('delete');
  console.log(req.body.id);
  // console.log(body('username'));
  users = users.filter((user) => user.id != req.body.id);

  // console.log(body('username').toDate());
  const errors = validationResult(req);
  // console.log(errors.formatter(''));

  // if (!errors.isEmpty()) {
  //   console.log(req.params);
  // }

  let usersResult = '';
  for (let index = 0; index < users.length; index++) {
    usersResult += index + ' ' + users[index].username + '<br/>';
  }

  // console.log(req.params);
  res.send(render());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
