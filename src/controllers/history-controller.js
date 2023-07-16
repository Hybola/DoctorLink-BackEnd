// postcontroller
// const { use } = require('../routes/history-routes')
const historyService = require('../services/history-service')

exports.getListsById = async (req, res, next) => {
    const value = req.query
    console.log(value)
    let arrResult = []

    try {
        const queryFullTime = await historyService.getHistoryFullTimeById(
            value.id
        )
        const queryPartTime = await historyService.getHistoryPartTimeById(
            value.id
        )

        queryFullTime.map((item) => {
            arrResult.push(item)
        })
        queryPartTime.map((item) => {
            arrResult.push(item)
        })

        res.status(200).json(arrResult)
    } catch (err) {
        console.log(err)
        res.status(200).json(err)
    }
}

exports.updateSelectedDoctor = async (req, res, next) => {
    const value = req.body
    console.log(value.id, value.status)
    try {
        const query = await historyService.updateSelectedDoctor(
            value.id,
            value.status
        )
        res.status(200).json(query)
    } catch (err) {
        console.log(err)
        res.status(200).json(err)
    }
}

exports.getJobById = async (req, res, next) => {
    const value = req.query
    console.log(value)
    try {
        const query = await historyService.getJobById(value.id)
        res.status(200).json(query)
    } catch (err) {
        console.log(err)
        res.status(200).json(err)
    }
}
exports.getCloseJob = async (req, res, next) => {
    const value = req.query
    console.log(value)
    try {
        const query = await historyService.getCloseJob(value.id, value.stage)
        res.status(200).json(query)
    } catch (err) {
        console.log(err)
        res.status(200).json(err)
    }
}

exports.EditJobPostByPostId = async (req, res, next) => {
    try {
        const { postId } = req.params
        const {
            title,
            location,
            map,
            line,
            phone,
            jobType,
            FullTime,
            PartTime,
            provinceId,
        } = req.body

        const jobPostPayload = { title, location, map, line, phone, provinceId }

        const jobPostEdit = await historyService.editJobPost(
            jobPostPayload,
            postId
        )

        if (jobType == 'FullTime') {
            const {
                jobDes,
                startDate,
                salary,
                other,
                workingDay,
                annual,
                benefit,
            } = FullTime
            const fullTimePayload = {
                jobDes,
                workingDay,
                startDate,
                salary,
                annual,
                benefit,
                other,
            }
            const fullTimeEdit = await historyService.editFullTime(
                fullTimePayload,
                postId
            )
            res.json(fullTimeEdit)
        }

        if (jobType == 'PartTime') {
            const { jobDes, startDate, endDate, wage, other } = PartTime
            const partTimePayload = { jobDes, startDate, endDate, wage, other }
            const partTimeEdit = await historyService.editPartTime(
                partTimePayload,
                postId
            )
            res.json(partTimeEdit)
        }
    } catch (err) {
        next(err)
    }
}
