const myJobService = require('../services/myjob-service')

exports.getAllSavedJob = async (req, res, next) => {
    try {
        const { id } = req.user
        const rs = await myJobService.getSavedJobById(id)
        res.json(rs)
    } catch (err) {
        next(err)
    }
}
