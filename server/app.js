require('@babel/register');
require('dotenv').config();
const express = require('express');
const config = require('./config/serverConfig');
const path = require('path');
const app = express();
const PORT = 4000;

const indexRouter = require('./routes/index.route');

config(app);
app.use(express.static(path.join(__dirname, './dist')));

app.use('/', indexRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
