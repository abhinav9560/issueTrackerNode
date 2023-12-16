const Bug = require('../database/model/bugSchema');



const createBug = async (req, res) => {
    const { title, desc, author, labels } = req.body;
    const id = req.params.id;
    if (!title || !desc || !author || !id) {
        res.send(400)
    } else {
        await Bug.create({
            title: title,
            desc: desc,
            // labels: [...labels],
            author: author,
            projectId: id
        })
        res.redirect(`../../project/${id}`)
    }
}

module.exports = { createBug }