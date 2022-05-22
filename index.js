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
  '<form method="POST">' +
  '<input type="text" name="username" value="' + data[0]?.username + '" />' +
  '<input type="submit" value="Click Me!" />' +
  '</form>' +
  '<form method="POST">' +
  '<input type="text" name="username" value="' + data[0]?.username + '" />' +
  '<input type="submit" value="Click Me!" />' +
  '</form>' +
  dataResult
);

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => {
  // console.log(req.params);
  console.log('get');

  res.send(render());
});

// app.post('/', urlencodedParser, (req, res) => {
app.post('/', (req, res) => {
  console.log('post');
  console.log(req.body.username);
  // console.log(body('username'));
  data.push({ username: req.body.username });

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
  data.push({ username: req.body.username });

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
  data.filter((value) => value.id !== req.body.id);

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
