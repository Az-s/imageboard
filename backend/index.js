const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const messages = require('./app/messages');
const fileDb = require('./fileDb');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

const port = 8000;

app.use('/messages', messages);

fileDb.init();
app.listen(port, () => {
  console.log(`Server started on ${port} port!`);
});