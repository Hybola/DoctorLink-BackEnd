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
        if (obj.FulTime) {
            modified.jobDes = obj.FulTime.jobDes
            modified.workingDay = obj.FulTime.workingDay
            modified.startDate = obj.FulTime.startDate
            modified.salary = obj.FulTime.salary
            modified.annual = obj.FulTime.annual
            modified.benefit = obj.FulTime.benefit
            modified.other = obj.FulTime.other
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
