// postcontroller
const { use } = require('../routes/history-routes')
const historyService = require('../services/history-service')

exports.getListsById = async (req, res, next) => {
    const value = req.query
    console.log(value)
    const arrResult = []

    try {
        const queryFullTime = await historyService.getHistoryFullTimeById(
            value.id
        )
        arrResult.push(queryFullTime[0])

        const queryPartTime = await historyService.getHistoryPartTimeById(
            value.id
        )
        arrResult.push(queryPartTime[0])

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
