const { Provider, PartTime, FullTime, JobPost } = require('../models')
const { Op } = require('sequelize')

exports.getHistoryPartTimeById = async (providerId) => {
    return await JobPost.findAll({
        include: [
            {
                model: PartTime,
            },
        ],
        where: {
            providerId: providerId,
            jobType: 'PartTime',
        },
    })
}

exports.getHistoryFullTimeById = async (providerId) => {
    return await JobPost.findAll({
        include: [
            {
                model: FullTime,
            },
        ],
        where: {
            providerId: providerId,
            jobType: 'FullTime',
        },
    })
}
