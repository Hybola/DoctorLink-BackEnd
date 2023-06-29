const createError = require('../utils/create-error')
const tokenService = require('../services/token-service')

const doctorSevice = require('../services/doctor-service')
const providerService = require('../services/provider-service')

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

        if (payload.role == 'doctor') {
            const user = await doctorSevice.getUserById(payload.id)
            const userForUse = JSON.parse(JSON.stringify(user))
            if (!user) createError('Unauthorized', 401)
            req.user = { ...userForUse, role: 'doctor' }
        } else if (payload.role == 'provider') {
            const user = await providerService.getUserById(payload.id)
            const userForUse = JSON.parse(JSON.stringify(user))
            if (!user) createError('Unauthorized', 401)
            req.user = { ...userForUse, role: 'provider' }
        }
        next()
    } catch (err) {
        next(err)
    }
}
