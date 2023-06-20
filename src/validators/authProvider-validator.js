const Joi = require('joi')
const validate = require('./validate')

const registerSchema = Joi.object({
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    email: Joi.string().email({ tlds: false }),
    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{6,30}$/)
        .trim()
        .required(),
    mobile: Joi.string().pattern(/^[0-9]{10}$/),
    healthProviderName: Joi.string().trim().required(),
    lineId: Joi.string().trim().required(),
})

const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
})

exports.validateRegister = validate(registerSchema)
exports.validateLogin = validate(loginSchema)
