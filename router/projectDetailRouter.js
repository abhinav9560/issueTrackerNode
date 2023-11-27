const express = require('express');
const routes = express.Router();
const { fetchProject } = require('../controllers/projectDetail')


routes.get("/:id", async (req, res) => {
    let {project,bugs} = await fetchProject(req.params.id);
    console.log(project,bugs,"PROJECT");
    res.render("projectdetail",{project,bugs})
});

module.exports = routes;
