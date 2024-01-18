require('@babel/register');

const express = require('express');
const config = require('./config/serverConfig');

const app = express();
const PORT = 4000;

const indexRouter = require('./routes/index.route');

config(app);

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
