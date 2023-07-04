// postcontroller
const { use } = require('../routes/history-routes')
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
