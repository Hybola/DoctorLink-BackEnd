const { JobPost, FullTime, PartTime } = require('../models')

const { Op } = require('sequelize')

exports.newpost = async (post) => JobPost.create(post)
exports.newfull = async (full) => FullTime.create(full)
exports.newpart = async (part) => PartTime.create(part)

exports.getAllPost = () =>
    JobPost.findAll({
        include: [{ model: FullTime }, { model: PartTime }],
    })

exports.filterJobFixLocation = (filterObject) => {
    const searching = JobPost.findAll({
        where: {
            provinceId: filterObject.provinceId,
            [Op.or]: [
                {
                    title: {
                        [Op.like]: `%${filterObject?.searchText}%`,
                    },
                },

                {
                    jobType: {
                        [Op.like]: `%${filterObject?.searchText}%`,
                    },
                },
            ],
        },
        include: [{ model: FullTime }, { model: PartTime }],
    })
    return searching
}
exports.filterJob = (filterObject) => {
    const searchingWaytwo = JobPost.findAll({
        where: {
            [Op.or]: [
                {
                    title: {
                        [Op.like]: `%${filterObject?.searchText}%`,
                    },
                },
                {
                    location: {
                        [Op.like]: `%${filterObject?.searchText}%`,
                    },
                },

                {
                    jobType: {
                        [Op.like]: `%${filterObject?.searchText}%`,
                    },
                },
            ],
        },
        include: [{ model: FullTime }, { model: PartTime }],
    })
    return searchingWaytwo
}
