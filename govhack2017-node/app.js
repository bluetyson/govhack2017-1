
const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');  // needed to get post body

const data = require('./data.js');

app.use(bodyParser.urlencoded({ extended: false }));        // needed to get post body
app.use(bodyParser.json());

app.use('/data', data);

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});