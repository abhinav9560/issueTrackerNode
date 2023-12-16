const express = require('express');
const routes = express.Router();
const {createBug} = require('../controllers/createBug')

routes.get("/:id", async (req, res) => {
    const id = req.params.id
    res.render("createBug",{id})
})

routes.post("/create/:id",createBug);

module.exports = routes;