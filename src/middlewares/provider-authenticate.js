const createError = require('../utils/create-error')

module.exports = async (req, res, next) => {
    try {
        if (req.user.role != 'provider') {
            createError('Forbidden', 403)
        }
        next()
    } catch (err) {
        next(err)
    }
}
