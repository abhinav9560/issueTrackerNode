const Bug = require('../database/model/bugSchema');



const createBug = async (req, res) => {
    const { title, desc, author, labels, projectId } = req.body;
    if (!title || !desc || !author || !projectId) {
        res.send(400)
    } else {
        const project = await Bug.create({
            title: title,
            desc: desc,
            labels: [...labels],
            author: author,
            projectId: projectId
        })
        res.send(200, project)
    }
}

module.exports = { createBug }