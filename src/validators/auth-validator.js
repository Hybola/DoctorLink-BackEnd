const Joi = require('joi')
const validate = require('./validate')

const registerSchema = Joi.object({
    username: Joi.string().trim().required(),
    email: Joi.string().email({ tlds: false }),
    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{6,30}$/)
        .trim()
        .required(),
    confirmPassword: Joi.string()
        .valid(Joi.ref('password'))
        .trim()
        .required()
        .strip(),
})

const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
})

exports.validateRegister = validate(registerSchema)
exports.validateLogin = validate(loginSchema)
