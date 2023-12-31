const myJobService = require('../services/myjob-service')

// SavedJob

exports.savedJob = async (req, res, next) => {
    try {
        const { jobpostId } = req.params
        const doctorJob = await myJobService.findDoctorJob(
            req.user.id,
            jobpostId
        )

        const doctorJobObj = JSON.parse(JSON.stringify(doctorJob))

        if (doctorJobObj.length > 0) {
            const rs = await myJobService.updateSavedJob(req.user.id, jobpostId)
            res.json({ doctorJobId: 'many' })
        } else {
            const payload = {
                status: 1,
                jobPostId: jobpostId,
                doctorId: req.user.id,
            }
            const rs = await myJobService.savedJob(payload)

            res.json(rs)
        }
    } catch (err) {
        next(err)
    }
}

exports.getAllSavedJob = async (req, res, next) => {
    try {
        const { id } = req.user
        const savedJob = await myJobService.getSavedJobByDoctorId(id)
        const savedJobObj = JSON.parse(JSON.stringify(savedJob))
        const modifiedSavedJob = savedJobObj.map((obj) => {
            const modified = {
                doctorJobId: obj.id,
                eventDate: obj.updatedAt,
                jobPostId: obj.jobPostId,
                title: obj.JobPost.title,
                location: obj.JobPost.Province.abbrievation,
                image: obj.JobPost.Provider.profileImage,
                providerName: obj.JobPost.Provider.providerName,
                providerId: obj.JobPost.Provider.id,
                jobtype: obj.JobPost.jobType,
            }

            if (obj.JobPost.jobType == 'FullTime') {
                modified['startDate'] = obj.JobPost.FullTime?.startDate
            }
            if (obj.JobPost.jobType == 'PartTime') {
                modified['startDate'] = obj.JobPost.PartTime?.startDate
                modified['endDate'] = obj.JobPost.PartTime?.endDate
            }
            return modified
        })

        res.json(modifiedSavedJob)
    } catch (err) {
        next(err)
    }
}

exports.unSavedJob = async (req, res, next) => {
    try {
        const { id } = req.params
        const rs = await myJobService.unSavedJobById(id)
        res.json(rs)
    } catch (err) {
        next(err)
    }
}

exports.uptoInterestJob = async (req, res, next) => {
    try {
        const { id } = req.params
        const rs = await myJobService.uptoInterestJob(id)
        res.json(rs)
    } catch (err) {
        next(err)
    }
}

// InterestJob
exports.interestJob = async (req, res, next) => {
    try {
        const { jobpostId } = req.params
        const doctorJob = await myJobService.findDoctorJob(
            req.user.id,
            jobpostId
        )
        const doctorJobObj = JSON.parse(JSON.stringify(doctorJob))

        if (doctorJobObj.length > 0) {
            const rs = await myJobService.updateInterestJob(
                req.user.id,
                jobpostId
            )
            res.json({ doctorJobId: 'many' })
        } else {
            const payload = {
                status: 2,
                jobPostId: jobpostId,
                doctorId: req.user.id,
            }
            const rs = await myJobService.interestJob(payload)

            res.json(rs)
        }
    } catch (err) {
        next(err)
    }
}

exports.getInterestJob = async (req, res, next) => {
    try {
        const { id } = req.user
        const interestJob = await myJobService.getInterestJobByDoctorId(id)
        const interestJobObj = JSON.parse(JSON.stringify(interestJob))
        const modifiedInterestJob = interestJobObj.map((obj) => {
            const modified = {
                doctorJobId: obj.id,
                eventDate: obj.updatedA,
                jobPostId: obj.jobPostId,
                title: obj.JobPost.title,
                location: obj.JobPost.Province.name,
                image: obj.JobPost.Provider.profileImage,
                providerName: obj.JobPost.Provider.providerName,
                providerId: obj.JobPost.Provider.id,
                jobtype: obj.JobPost.jobType,
            }

            if (obj.JobPost.jobType == 'FullTime') {
                modified['startDate'] = obj.JobPost.FullTime?.startDate
            }
            if (obj.JobPost.jobType == 'PartTime') {
                modified['startDate'] = obj.JobPost.PartTime?.startDate
                modified['endDate'] = obj.JobPost.PartTime?.endDate
            }
            return modified
        })

        res.json(modifiedInterestJob)
    } catch (err) {
        next(err)
    }
}

exports.downtoSaveJob = async (req, res, next) => {
    try {
        const { id } = req.params
        const rs = await myJobService.downtoSaveJob(id)
        res.json(rs)
    } catch (err) {
        next(err)
    }
}

// confirm job

exports.getConfirmJob = async (req, res, next) => {
    try {
        const { id } = req.user
        const confirmedJob = await myJobService.getConfirmedJobByDoctorId(id)
        const confirmedJobObj = JSON.parse(JSON.stringify(confirmedJob))
        const modifiedconfirmedJobObj = confirmedJobObj.map((obj) => {
            const modified = {
                doctorJobId: obj.id,
                eventDate: obj.updatedAt,
                jobPostId: obj.jobPostId,
                title: obj.JobPost.title,
                location: obj.JobPost.Province.name,
                image: obj.JobPost.Provider.profileImage,
                providerName: obj.JobPost.Provider.providerName,
                providerId: obj.JobPost.Provider.id,
                jobtype: obj.JobPost.jobType,
            }

            if (obj.JobPost.jobType == 'FullTime') {
                modified['startDate'] = obj.JobPost.FullTime?.startDate
            }
            if (obj.JobPost.jobType == 'PartTime') {
                modified['startDate'] = obj.JobPost.PartTime?.startDate
                modified['endDate'] = obj.JobPost.PartTime?.endDate
            }
            return modified
        })

        res.json(modifiedconfirmedJobObj)
    } catch (err) {
        next(err)
    }
}
