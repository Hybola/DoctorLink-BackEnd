const e = require('express')
const {
    Provider,
    PartTime,
    FullTime,
    JobPost,
    DoctorJob,
    Doctor,
    Province,
} = require('../models')
const { Op } = require('sequelize')

exports.updateSelectedDoctor = async (id, status) => {
    const query = await DoctorJob.update(
        { status: status },
        {
            where: {
                id: id,
            },
        }
    )
    return query
}

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

exports.getJobById = async (jobId) => {
    return await JobPost.findAll({
        include: [
            {
                model: FullTime,
            },
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
            {
                model: Province,
            },
        ],
        where: {
            id: jobId,
        },
    })
}

exports.getCloseJob = async (jobId, stage) => {
    return await JobPost.update(
        { stage: stage, status: 'inactive' },
        {
            where: {
                id: jobId,
            },
        }
    )
}
exports.editJobPost = (jobPostPayload, jobPostId) =>
    JobPost.update(jobPostPayload, {
        where: {
            id: jobPostId,
        },
    })

exports.editFullTime = (jobPostPayload, jobPostId) =>
    FullTime.update(jobPostPayload, {
        where: {
            jobPostId: jobPostId,
        },
    })

exports.editPartTime = (jobPostPayload, jobPostId) =>
    PartTime.update(jobPostPayload, {
        where: {
            jobPostId: jobPostId,
        },
    })

exports.getProviderProfileById = async (providerId) => {
    return await Provider.findOne({
        include: [
            {
                model: Province,
            },
        ],

        where: {
            id: providerId,
        },
    })
}
