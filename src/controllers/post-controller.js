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

exports.getAllPost = async (req, res, next) => {
    try {
        const allJobPost = await postService.getAllPost()
        res.json(allJobPost)
    } catch (err) {
        next(err)
    }
}

exports.filterJob = async (req, res, next) => {
    try {
        const filterObject = req.body
        console.log(filterObject)
        const filterJob = await postService.filterJob(filterObject)
        console.log(filterObject)
        res.json(filterJob)
    } catch (err) {
        next(err)
    }
}

// exports.getpostbyid = (req, res, next) => {}
// exports.deletepost = (req, res, next) => {}
// exports.editpost = (req, res, next) => {}
