const myJobService = require('../services/myjob-service')

exports.getAllSavedJob = async (req, res, next) => {
    try {
        const { id } = req.user
        const savedJob = await myJobService.getSavedJobByDoctorId(id)
        const savedJobObj = JSON.parse(JSON.stringify(savedJob))
        const modifiedSavedJob = savedJobObj.map((obj) => {
            const modified = {
                savedJobId: obj.id,
                savedDate: obj.createdAt,
                jobPostId: obj.jobPostId,
                title: obj.JobPost.title,
                location: obj.JobPost.Province.name,
                image: obj.JobPost.Provider.profileImage,
                providerName: obj.JobPost.Provider.providerName,
                jobtype: obj.JobPost.jobType,
            }

            if (obj.JobPost.jobType == 'FullTime') {
                modified['startDate'] = obj.JobPost.FullTimes[0]?.startDate
            }
            if (obj.JobPost.jobType == 'PartTime') {
                modified['startDate'] = obj.JobPost.PartTimes[0]?.startDateTime
                modified['endDate'] = obj.JobPost.PartTimes[0]?.endDateTime
            }
            return modified
        })

        res.json(modifiedSavedJob)
    } catch (err) {
        next(err)
    }
}
