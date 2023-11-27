const Bug = require('../database/model/bugSchema');
const Project = require('../database/model/projectSchema');



const fetchProject = async (id) => {
    try {
        const project = await Project.findOne({_id:id});
        const bugs = await Bug.find({projectId:id});
        return {project,bugs}
    } catch (error) {
        return {error:"Invalid project id"};
    }
}

module.exports = {fetchProject}