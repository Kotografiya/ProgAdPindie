const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRouter = require('./routes/apiRouter')


const connectToDatabase = require('./database/connect');
// const cors = require('./middlewares/cors');

const app = express();
const PORT = 3005;

connectToDatabase();

app.use(
  // cors, 
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),
  apiRouter,
);

app.listen(PORT);