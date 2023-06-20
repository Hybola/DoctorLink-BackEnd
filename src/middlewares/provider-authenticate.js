const createError = require('../utils/create-error')
const tokenService = require('../services/token-service')

const providerSevice = require("../services/provider-service");

module.exports = async (req, res, next) => {
    try {
        /////Bearer "token....."
        const authorization = req.headers.authorization
        if (!authorization || !authorization.startsWith('Bearer ')) {
            createError('Unauthorized', 401)
        }
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            createError('Unauthorized', 401)
        }
        const payload = tokenService.verify(token)
        
        const user = await providerSevice.getUserById(payload.id);
        if (!user) createError("Unauthorized", 401);
        req.user = user;
        next()
    } catch (err) {
        next(err)
    }
}
