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

    // value.providerId = req.user.id

    // const post = await postService.newpost(value)
    // console.log(post)
    // value.jobPostId = post.id
    // if (req.body.jobType === 'FullTime') {
    //     console.log(value)
    //     const full = await postService.newfull(value)
    //     res.status(200).json({ full, post })
    // } else {
    //     const part = await postService.newpart(value)
    //     res.status(200).json({ part, post })
    // }
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
            const { jobDes, startDate, salary, other } = FullTime
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
