const {
    Provider,
    PartTime,
    FullTime,
    JobPost,
    DoctorJob,
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
                model: DoctorJob,
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
                model: DoctorJob,
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
