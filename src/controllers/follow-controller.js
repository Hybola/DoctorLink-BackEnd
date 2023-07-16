const { Provider } = require('../models')
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
        const useRs = JSON.parse(JSON.stringify(rs))
        const forSend = useRs.map((obj) => {
            const rs = {
                ...obj,
                providerName: obj.Provider.providerName,
                providerImage: obj.Provider.profileImage,
                providerdes: obj.Provider.description,
            }
            delete rs.Provider
            return rs
        })

        res.json(forSend)
    } catch (err) {
        next(err)
    }
}

exports.unFollowerById = async (req, res, next) => {
    try {
        const { followId } = req.params
        const rs = await followService.unFollowerById(followId)
        res.json(rs)
    } catch (err) {
        next(err)
    }
}
