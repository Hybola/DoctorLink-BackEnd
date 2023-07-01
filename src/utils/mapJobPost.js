module.exports = (postObj, doctorId) => {
    const addJobStatus = postObj.map((post) => {
        if (post.DoctorJobs.length == 0) {
            return { ...post, jobStatus: 0 }
        }
        const doctorAddJob = post.DoctorJobs.find(
            (obj) => obj.doctorId == doctorId
        )
        if (doctorAddJob) {
            return { ...post, jobStatus: doctorAddJob.status }
        }
        return { ...post, jobStatus: 0 }
    })

    const result = addJobStatus.map((obj) => {
        const modified = {
            id: obj.id,
            title: obj.title,
            location: obj.location,
            map: obj.map,
            line: obj.line,
            jobType: obj.jobType,
            phone: obj.phone,
            status: obj.status,
            stage: obj.stage,
            createdAt: obj.createdAt,
            updatedAt: obj.updateAt,
            providerId: obj.providerId,
            providerName: obj.Provider.providerName,
            providerProfileImage: obj.Provider.profileImage,
            providerCoverImage: obj.Provider.coverImage,
            Province: obj.Province.name,
            jobStatus: obj.jobStatus,
        }
        if (obj.FullTime) {
            modified.jobDes = obj.FullTime.jobDes
            modified.workingDay = obj.FullTime.workingDay
            modified.startDate = obj.FullTime.startDate
            modified.salary = obj.FullTime.salary
            modified.annual = obj.FullTime.annual
            modified.benefit = obj.FullTime.benefit
            modified.other = obj.FullTime.other
        }
        if (obj.PartTime) {
            modified.jobDes = obj.PartTime.jobDes
            modified.startDate = obj.PartTime.startDate
            modified.endDate = obj.PartTime.endDate
            modified.wage = obj.PartTime.wage
            modified.other = obj.PartTime.other
        }
        return modified
    })

    return result
}
