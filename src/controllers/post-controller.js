// postcontroller
const postService = require('../services/post-service')

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
    const filterObject = req.body

    if (req.body.location.trim() == '') {
        const filterJob = await postService.filterJob(filterObject)
        res.json(filterJob)
        console.log(filterJob)
    } else {
        const filterJobFixLocation = await postService.filterJobFixLocation(
            filterObject
        )
        res.json(filterJobFixLocation)
        console.log(filterJobFixLocation)
    }
}

// exports.getpostbyid = (req, res, next) => {}
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

exports.doctorGetPostbyProviderId = async (req, res, next) => {
    try {
        const { providerId } = req.params
        const postbyProviderId = await postService.doctorGetPostbyProviderId(
            providerId
        )
        const postObj = JSON.parse(JSON.stringify(postbyProviderId))

        const addJobStatus = postObj.map((post) => {
            if (post.DoctorJobs.length == 0) {
                return { ...post, jobStatus: 0 }
            }
            const doctorAddJob = post.DoctorJobs.find(
                (obj) => obj.doctorId == req.user.id
            )
            if (doctorAddJob) {
                return { ...post, jobStatus: doctorAddJob.status }
            }
            return { ...post, jobStatus: 0 }
        })

        const result = addJobStatus.map((obj) => {
            const modified = {
                id: obj.id,
                title: obj.title,
                location: obj.location,
                map: obj.map,
                line: obj.line,
                jobType: obj.jobType,
                phone: obj.phone,
                status: obj.status,
                stage: obj.stage,
                createdAt: obj.createdAt,
                updatedAt: obj.updateAt,
                providerId: obj.providerId,
                providerName: obj.Provider.providerName,
                providerProfileImage: obj.Provider.profileImage,
                providerCoverImage: obj.Provider.coverImage,
                Province: obj.Province.name,
                jobStatus: obj.jobStatus,
            }
            return modified
        })

        res.status(200).json(result)
    } catch (err) {
        next(err)
    }
}

exports.doctorGetPostById = async (req, res, next) => {
    try {
        const { id } = req.params
        const post = await postService.doctorGetPostById(id)
        const postObj = JSON.parse(JSON.stringify(post))
        const addJobStatus = postObj.map((post) => {
            if (post.DoctorJobs.length == 0) {
                return { ...post, jobStatus: 0 }
            }
            const doctorAddJob = post.DoctorJobs.find(
                (obj) => obj.doctorId == req.user.id
            )
            if (doctorAddJob) {
                return { ...post, jobStatus: doctorAddJob.status }
            }
            return { ...post, jobStatus: 0 }
        })
        const result = addJobStatus.map((obj) => {
            const modified = {
                id: obj.id,
                title: obj.title,
                location: obj.location,
                map: obj.map,
                line: obj.line,
                jobType: obj.jobType,
                phone: obj.phone,
                status: obj.status,
                stage: obj.stage,
                createdAt: obj.createdAt,
                updatedAt: obj.updateAt,
                providerId: obj.providerId,
                providerName: obj.Provider.providerName,
                providerProfileImage: obj.Provider.profileImage,
                providerCoverImage: obj.Provider.coverImage,
                Province: obj.Province.name,
                jobStatus: obj.jobStatus,
            }
            return modified
        })
        res.status(200).json(result)
    } catch (err) {
        next(err)
    }
}
