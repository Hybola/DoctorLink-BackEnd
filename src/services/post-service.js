const {
    JobPost,
    FullTime,
    PartTime,
    DoctorJob,
    Province,
    Provider,
} = require('../models')

const { Op } = require('sequelize')

exports.newpost = async (post) => JobPost.create(post)
exports.newfull = async (full) => FullTime.create(full)
exports.newpart = async (part) => PartTime.create(part)

exports.getAllPost = () => JobPost.findAll()

exports.filterJobFixLocation = async (filterObject) => {
    const searching = await JobPost.findAll({
        where: {
            location: filterObject.location,
            [Op.or]: [
                {
                    title: {
                        [Op.like]: `%${filterObject?.title}%`,
                    },
                },

                {
                    jobType: {
                        [Op.like]: `%${filterObject?.jobType}%`,
                    },
                },
            ],
        },
    })
    return searching
}
exports.filterJob = async (filterObject) => {
    const searchingWaytwo = await JobPost.findAll({
        where: {
            [Op.or]: [
                {
                    title: {
                        [Op.like]: `%${filterObject?.title}%`,
                    },
                },
                {
                    location: {
                        [Op.like]: `%${filterObject?.location}%`,
                    },
                },

                {
                    jobType: {
                        [Op.like]: `%${filterObject?.jobType}%`,
                    },
                },
            ],
        },
    })
    return searchingWaytwo
}

exports.doctorGetPostbyProviderId = (providerId) =>
    JobPost.findAll({
        where: { providerId: providerId, stage: 1 },
        include: [
            {
                model: DoctorJob,
            },
            {
                model: Province,
            },
            {
                model: Provider,
            },
            {
                model: PartTime,
            },
            {
                model: FullTime,
            },
        ],
    })

exports.doctorGetPostById = (postId) =>
    JobPost.findAll({
        where: { id: postId, stage: 1 },
        include: [
            {
                model: DoctorJob,
            },
            {
                model: Province,
            },
            {
                model: Provider,
            },
            {
                model: PartTime,
            },
            {
                model: FullTime,
            },
        ],
    })
