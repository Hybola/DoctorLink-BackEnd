const {
    SavedJob,
    JobPost,
    Provider,
    Province,
    PartTime,
    FullTime,
    JobInterest,
    DoctorJob,
} = require('../models')

// SavedJob

exports.findDoctorJob = (doctorId, jobPostId) =>
    DoctorJob.findOne({
        where: {
            doctorId,
            jobPostId,
            status: 0,
        },
    })

exports.toSaveJob = (id) =>
    DoctorJob.update(
        { status: 1 },
        {
            where: {
                id,
            },
        }
    )

exports.savedJob = (payload) => DoctorJob.create(payload)

exports.getSavedJobByDoctorId = (id) =>
    DoctorJob.findAll({
        where: {
            doctorId: id,
            status: 1,
        },
        include: [
            {
                model: JobPost,
                include: [
                    {
                        model: Provider,
                    },
                    {
                        model: Province,
                    },
                    {
                        model: FullTime,
                    },
                    {
                        model: PartTime,
                    },
                ],
            },
        ],
    })

exports.unSavedJobById = (id) =>
    DoctorJob.update(
        { status: 0 },
        {
            where: {
                id,
                status: 1,
            },
        }
    )

exports.uptoInterestJob = (id) =>
    DoctorJob.update(
        { status: 2 },
        {
            where: {
                id,
                status: 1,
            },
        }
    )

// InterestJob

exports.interestJob = (payload) => DoctorJob.create(payload)

exports.uptoInterestJob = (id) =>
    DoctorJob.update(
        { status: 2 },
        {
            where: {
                id,
                status: 1,
            },
        }
    )

exports.getInterestJobByDoctorId = (id) =>
    DoctorJob.findAll({
        where: {
            doctorId: id,
            status: 2,
        },
        include: [
            {
                model: JobPost,
                include: [
                    {
                        model: Provider,
                    },
                    {
                        model: Province,
                    },
                    {
                        model: FullTime,
                    },
                    {
                        model: PartTime,
                    },
                ],
            },
        ],
    })

exports.downtoSaveJob = (id) =>
    DoctorJob.update(
        { status: 1 },
        {
            where: {
                id,
                status: 2,
            },
        }
    )
