// postcontroller
const postService = require('../services/post-service')

exports.createpost = async (req, res, next) => {
    const value = req.body
    console.log(value)
    const post = await postService.newpost(value)
    value.postId = post.id
    if (req.body.jobType === 1) {
        console.log(value)
        const full = await postService.newfull(value)
        res.status(200).json({ full, post })
    } else {
        const part = await postService.newpart(value)
        res.status(200).json({ part, post })
    }
}

// exports.getallpost = (req, res, next) => {}
// exports.getpostbyid = (req, res, next) => {}
// exports.deletepost = (req, res, next) => {}
// exports.editpost = (req, res, next) => {}
