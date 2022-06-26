
import express from 'express';
import bodyParser from 'body-parser';
import { body, validationResult } from 'express-validator';
import { v4 as uuid } from 'uuid';
import User from './models/User/User.js';
import { removeUser, renderUsers, updateUser, users } from './models/Users/Users.js';

const app = express();
const port = 3000;

// create application/json parser
// var jsonParser = bodyParser.json();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const render = () => (
  '<h1>Add</h1>' +
  '<form method="POST" action="/add">' +
  '<input type="text" name="username" value="" placeholder="Username" />' +
  '<input type="password" name="password" value="" placeholder="Password" />' +
  '<input type="password" name="confirmation_password" value="" placeholder="Confirmation Password" />' +
  '<input type="submit" value="Add" />' +
  '</form>' +
  '<h1>Delete</h1>' +
  '<form method="POST" action="/delete">' +
  '<input type="text" name="username" value="" placeholder="Username" />' +
  '<input type="password" name="password" value="" placeholder="Password" />' +
  '<input type="submit" value="Delete" />' +
  '</form>' +
  '<h1>Update</h1>' +
  '<form method="POST" action="/update">' +
  '<input type="text" name="username" value="" placeholder="Username" />' +
  '<input type="password" name="password" value="" placeholder="Password" />' +
  '<input type="text" name="new_username" value="" placeholder="New Username" />' +
  '<input type="password" name="new_password" value="" placeholder="New Password" />' +
  '<input type="submit" value="Update" />' +
  '</form>' +
  '<h1>View</h1>' +
  '<table>' +
  // '<tr>' + JSON.stringify(users) + '</tr>' +
    // users.map((user) => user.render()).join() +
    renderUsers() +
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
  console.log(req.body.confirmation_password);
  console.log(req.body.password === req.body.confirmation_password);
  console.log(typeof users[req.body.username] === 'undefined');
  // console.log(body('username'));
  if (req.body.password === req.body.confirmation_password &&
    typeof users[req.body.username] === 'undefined') {
    users[req.body.username] = new User(
      req.body.username,
      req.body.password,
      '',
      '',
      '',
      '');
    console.log(users);
  }

  // console.log(body('username').toDate());
  const errors = validationResult(req);
  // console.log(errors.formatter(''));

  // if (!errors.isEmpty()) {
  //   console.log(req.params);
  // }

  // let usersResult = '';
  // for (let index = 0; index < users.length; index++) {
  // for (user in users) {
  //   // usersResult += index + ' ' + users[index].username + '<br/>';
  //   usersResult += users.username + '<br/>';
  // }

  // console.log(req.params);
  res.send(render());
});

// app.post('/update', urlencodedParser, (req, res) => {
app.post('/update', (req, res) => {
  console.log('post');
  console.log(req.body.username);
  // console.log(body('username'));
  // users = users.map((user) => {
    // if (user.username == req.body.username && user.password == req.body.password) {
    // if (user.authentication(req.body.username, req.body.password)) {
    if (users[req.body.username].authentication(req.body.username, req.body.password)) {
      // user.setUsername(req.body.new_username);
      // user.setPassword(req.body.new_password);
      updateUser(req.body.username, new User(req.body.new_username, req.body.new_password));
    }
    // return user;
  // });

  // console.log(body('username').toDate());
  const errors = validationResult(req);
  // console.log(errors.formatter(''));

  // if (!errors.isEmpty()) {
  //   console.log(req.params);
  // }

  // let usersResult = '';
  // for (let index = 0; index < users.length; index++) {
  //   usersResult += index + ' ' + users[index].username + '<br/>';
  // }

  // console.log(req.params);
  res.send(render());
});

// app.post('/update', urlencodedParser, (req, res) => {
app.post('/delete', (req, res) => {
  console.log('delete');
  console.log(req.body.username);
  // console.log(body('username'));
  // users = users.filter((user) => user.username != req.body.username);
  // users = users.filter((user) => !user.authentication(req.body.username, req.body.password)
  console.log(users);
  if (users[req.body.username].authentication(req.body.username, req.body.password)) {
    removeUser(req.body.username);
  }
  // users = users.filter((user) => !user.authentication(req.body.username, req.body.password)
  // users = users.filter((user) => {

  //   console.log(user, !user.authentication(req.body.username, req.body.password));
  //   return !user.authentication(req.body.username, req.body.password);
  // }

  // (
  //   user.username != req.body.username ||
  //   user.password != req.body.password
  // )
  // );

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
