const Project = require('../database/model/projectSchema');



const createProject = async (req, res) => {
    const { title, desc, author } = req.body;
    if (!title || !desc || !author) {
        res.send(400)
    } else {
        const project = await Project.create({
            name: title,
            desc: desc,
            author: author
        })
        res.redirect('..')
    }
}

const fetchProjects = async (req,res) => {
    const projects = await Project.find();
    return projects;
}

module.exports = { createProject ,fetchProjects}