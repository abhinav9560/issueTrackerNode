const express = require('express');
const routes = express.Router();
const {createProject,fetchProjects} = require('../controllers/createProject')

routes.get("/", async (req, res) => {
    let projects = await fetchProjects();
    res.render("home",{projects})
})

routes.get("/create",async(req,res) => {
    res.render('createproject');
})
routes.post("/create",createProject);
routes.get("/fetchprojects",fetchProjects)

module.exports = routes;