const {
    SavedJob,
    JobPost,
    Provider,
    Province,
    PartTime,
    FullTime,
} = require('../models')

exports.getSavedJobByDoctorId = (id) =>
    SavedJob.findAll({
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

exports.getFulltimeByjobId = (id) =>
    SavedJob.findAll({
        where: {
            JobPostId: id,
        },
    })
