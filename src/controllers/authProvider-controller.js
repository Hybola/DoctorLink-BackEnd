const providerService = require('../services/provider-service')
const createError = require('../utils/create-error')
const bcryptService = require('../services/bcrypt-service')
const tokenService = require('../services/token-service')
const {
    validateLogin,
    validateRegister,
} = require('../validators/authProvider-validator')

exports.register = async (req, res, next) => {
    try {
        const value = validateRegister(req.body)
        const isUserExist = await providerService.checkEmailExist(value.email)
        if (isUserExist) {
            createError('Email address already have', 400)
        }

        value.password = await bcryptService.hash(value.password)

        const user = await providerService.createUser(value)

        const accessToken = tokenService.sign({ id: user.id, role: 'provider' })
        res.status(200).json({ accessToken })
    } catch (err) {
        next(err)
    }
}

exports.login = async (req, res, next) => {
    try {
        const value = validateLogin(req.body)
        // console.log('value--->', value)
        const user = await providerService.getUserByEmail(value.email)

        if (user) {
            const accessToken = tokenService.sign({
                id: user.id,
                role: 'provider',
            })
            res.status(200).json({ accessToken })
        }

        if (!user) {    
            createError('Please Register', 400)
        }
        const isCorrect = await bcryptService.compare(
            value.password,
            user.password
        )

        if (!isCorrect) {
            createError('Invalid credential', 400)
        }

        // const accessToken = tokenService.sign({ id: user.id, role: 'provider' })
        // res.status(200).json({ accessToken })
    } catch (err) {
        next(err)
    }
}

exports.logingoogle = async (req, res, next) => {
    try {
        const value = req.body

        const user = await providerService.getUserByEmail(value.email)

        let userGoogle

        value.password = await bcryptService.hash(value.password)

        if (!user) {
            userGoogle = await providerService.createUser(value)
            const accessToken = tokenService.sign({
                id: userGoogle ? userGoogle.id : user.id,
                role: 'provider',
            })
            res.status(200).json({ accessToken })
        }
        if (user) {
            const accessToken = tokenService.sign({
                id: user.id,
                role: 'provider',
            })
            res.status(200).json({ accessToken })
        }
    } catch (err) {
        next(err)
    }
}

exports.getMe = (req, res, next) => {
    res.status(200).json({ id: req.user.id, role: req.user.role })
}
