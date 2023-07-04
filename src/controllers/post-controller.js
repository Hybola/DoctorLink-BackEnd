// postcontroller
const postService = require('../services/post-service')
const mapJobPost = require('../utils/mapJobPost')

exports.createpost = async (req, res, next) => {
    const value = req.body
    value.providerId = req.user.id
    value.status = 1

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
        if (req.body.provinceId == '') {
            const filterJob = await postService.filterJob(filterObject)
            res.json(filterJob)
        } else {
            const filterJobFixLocation = await postService.filterJobFixLocation(
                filterObject
            )
            res.json(filterJobFixLocation)
        }
    } catch (err) {
        next(err)
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

exports.getPostbyProviderId = async (req, res, next) => {
    try {
        const { providerId } = req.params

        const postbyProviderId = await postService.getPostbyProviderId(
            providerId
        )
        const postObj = JSON.parse(JSON.stringify(postbyProviderId))

        const result = mapJobPost(postObj, req.user.id)

        res.status(200).json(result)
    } catch (err) {
        next(err)
    }
}

exports.getPostById = async (req, res, next) => {
    try {
        const { id } = req.params
        const post = await postService.getPostById(id)
        const postObj = JSON.parse(JSON.stringify(post))

        const result = mapJobPost(postObj, req.user.id)

        res.status(200).json(result)
    } catch (err) {
        next(err)
    }
}

exports.getPostByIdForGuest = async (req, res, next) => {
    try {
        const { id } = req.params
        const post = await postService.getPostById(id)
        const postObj = JSON.parse(JSON.stringify(post))

        const result = mapJobPost(postObj, '')

        res.status(200).json(result)
    } catch (err) {
        next(err)
    }
}
