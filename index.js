const express = require('express');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');

const app = express();
const port = 3000;

let data = [];

// create application/json parser
// var jsonParser = bodyParser.json();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const render = () => (
  '<h1>Add</h1>' +
  '<form method="POST" action="/add">' +
  '<input type="text" name="username" value="" />' +
  '<input type="submit" value="Add" />' +
  '</form>' +
  '<h1>Delete</h1>' +
  '<form method="POST" action="/delete">' +
  '<input type="number" name="id" value="" />' +
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
    data.map((user) => `<tr><td>${user.id}</td><td>${user.username}</td></tr>`).join() +
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
  data.push({ id: data.length, username: req.body.username });

  // console.log(body('username').toDate());
  const errors = validationResult(req);
  // console.log(errors.formatter(''));

  // if (!errors.isEmpty()) {
  //   console.log(req.params);
  // }

  let dataResult = '';
  for (let index = 0; index < data.length; index++) {
    dataResult += index + ' ' + data[index].username + '<br/>';
  }

  // console.log(req.params);
  res.send(render());
});

// app.post('/update', urlencodedParser, (req, res) => {
app.post('/update', (req, res) => {
  console.log('post');
  console.log(req.body.username);
  // console.log(body('username'));
  data = data.map((user) => {
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

  let dataResult = '';
  for (let index = 0; index < data.length; index++) {
    dataResult += index + ' ' + data[index].username + '<br/>';
  }

  // console.log(req.params);
  res.send(render());
});

// app.post('/update', urlencodedParser, (req, res) => {
app.post('/delete', (req, res) => {
  console.log('delete');
  console.log(req.body.id);
  // console.log(body('username'));
  data = data.filter((user) => user.id != req.body.id);

  // console.log(body('username').toDate());
  const errors = validationResult(req);
  // console.log(errors.formatter(''));

  // if (!errors.isEmpty()) {
  //   console.log(req.params);
  // }

  let dataResult = '';
  for (let index = 0; index < data.length; index++) {
    dataResult += index + ' ' + data[index].username + '<br/>';
  }

  // console.log(req.params);
  res.send(render());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
