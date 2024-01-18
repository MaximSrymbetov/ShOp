const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const verifyAccessToken = require('../middleware/verifyJWT');

const serverConfig = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use(cookieParser());
  app.use(verifyAccessToken);
};

module.exports = serverConfig;
