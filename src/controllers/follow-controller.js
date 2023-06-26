const followService = require('../services/follow-service')

exports.getFollowerById = async (req, res, next) => {
    try {
        const { id } = req.params
        const rs = await followService.getFollowerById(id)
        res.json(rs)
    } catch (err) {
        next(err)
    }
}

exports.getFollowedById = async (req, res, next) => {
    try {
        const { id } = req.params
        const rs = await followService.getFollowedById(id)
        res.json(rs)
    } catch (err) {
        next(err)
    }
}
