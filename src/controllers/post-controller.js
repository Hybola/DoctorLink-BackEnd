// postcontroller
const postService = require('../services/post-service')

exports.createpost = async (req, res, next) => {
    const value = req.body
    value.providerId = req.user.id

    console.log(value)

    const post = await postService.newpost(value)
    console.log(post)
    value.jobPostId = post.id
    if (req.body.jobType === 'FullTime') {
        console.log(value)
        const full = await postService.newfull(value)
        res.status(200).json({ full, post })
    } else {
        const part = await postService.newpart(value)
        res.status(200).json({ part, post })
    }
}

exports.getallpost = async (req, res, next) => {
    const getall = await postService.getall({
        attributes: {
            exclude: ['createdAt', 'updatedAt'],
        },
    })
    res.status(200).json({ getall })
}
exports.getpostbyid = async (req, res, next) => {
    const id = req.params
    const getid = await postService.getid({
        where: { id: id },
    })
    res.status(200).json({ getid })
}
// exports.deletepost = (req, res, next) => {}
// exports.editpost = (req, res, next) => {}
