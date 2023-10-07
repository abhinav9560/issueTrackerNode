const express = require('express');
const routes = express.Router();
const {fetchProject} = require('../controllers/projectDetail')


routes.get("/:id",fetchProject);

module.exports = routes;
