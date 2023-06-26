const doctorService = require('../services/doctor-service')
const createError = require('../utils/create-error')
const bcryptService = require('../services/bcrypt-service')
const tokenService = require('../services/token-service')
const {
    validateLogin,
    validateRegister,
} = require('../validators/authDoctor-validator')

exports.register = async (req, res, next) => {
    try {
        const value = validateRegister(req.body)
        const isUserExist = await doctorService.checkEmailExist(value.email)
        if (isUserExist) {
            createError('Email address already have', 400)
        }

        value.password = await bcryptService.hash(value.password)

        const user = await doctorService.createUser(value)

        const accessToken = tokenService.sign({ id: user.id, role: 'doctor' })
        res.status(200).json({ accessToken })
    } catch (err) {
        next(err)
    }
}

exports.login = async (req, res, next) => {
    try {
        const value = validateLogin(req.body)
        const user = await doctorService.getUserByEmail(value.email)
        if (!user) {
            createError('Please Register!', 400)
        }
        const isCorrect = await bcryptService.compare(
            value.password,
            user.password
        )

        if (!isCorrect) {
            createError('invalid credential', 400)
        }

        const accessToken = tokenService.sign({ id: user.id, role: 'doctor' })
        res.status(200).json({ accessToken })
    } catch (err) {
        next(err)
    }
}
exports.logingoogle = async (req, res, next) => {
    try {
        const value = req.body

        const user = await doctorService.getUserByEmail(value.email)

        let userGoogle

        value.password = await bcryptService.hash(value.password)

        if (!user) {
            userGoogle = await doctorService.createUser(value)
        }

        const accessToken = tokenService.sign({
            id: userGoogle ? userGoogle.id : user.id,
            role: 'doctor',
        })
        res.status(200).json({ accessToken })
    } catch (err) {
        next(err)
    }
}

exports.getMe = (req, res, next) => {
    res.status(200).json({ user: req.user })
}
