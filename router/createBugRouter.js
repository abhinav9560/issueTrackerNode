const express = require('express');
const routes = express.Router();
const {createBug} = require('../controllers/createBug')

routes.get("/", async (req, res) => {
    res.render("home")
})

routes.post("/createbug",createBug);

module.exports = routes;