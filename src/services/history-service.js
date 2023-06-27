const {
    Provider,
    PartTime,
    FullTime,
    JobPost,
    JobInterest,
    Doctor,
} = require('../models')
const { Op } = require('sequelize')

exports.getHistoryPartTimeById = async (providerId) => {
    return await JobPost.findAll({
        include: [
            {
                model: PartTime,
            },
            {
                model: JobInterest,
                include: [
                    {
                        model: Doctor,
                    },
                ],
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
            {
                model: JobInterest,
                include: [
                    {
                        model: Doctor,
                    },
                ],
            },
        ],
        where: {
            providerId: providerId,
            jobType: 'FullTime',
        },
    })
}
