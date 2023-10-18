var express = require('express');
const courseRoutes = require('./course');
const routes = express.Router();

routes.use('/course', courseRoutes);
module.exports = routes;
