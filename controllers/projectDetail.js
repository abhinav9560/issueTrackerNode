const Bug = require('../database/model/bugSchema');
const Project = require('../database/model/projectSchema');



const fetchProject = async (req,res) => {
    const id = req.params.id;
    try {
        const project = await Project.findOne({_id:id});
        const bugs = await Bug.find({projectId:id});
        res.send(200,{project,bugs});
    } catch (error) {
        res.send(400,{error:"Invalid project id"});
    }
}

module.exports = {fetchProject}