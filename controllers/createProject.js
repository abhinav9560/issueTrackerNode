const Project = require('../database/model/projectSchema');



const createProject = async (req, res) => {
    const { name, desc, author } = req.body;
    if (!name || !desc || !author) {
        res.send(400)
    } else {
        const project = await Project.create({
            name: name,
            desc: desc,
            author: author
        })
        res.send(200,project)
    }
}

const fetchProjects = async (req,res) => {
    const projects = await Project.find();
    res.send(200,projects);
}

module.exports = { createProject ,fetchProjects}