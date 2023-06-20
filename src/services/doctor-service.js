const { Doctor } = require('../models')

exports.checkEmailExist = async (email) => {
    const existUser = await Doctor.findOne({
        where: {
            email,
        },
    })
    return !!existUser
}

exports.getUserByEmail = async (email) => {
    return await Doctor.findOne({
        where: {
            email: email,
        },
    })
}
exports.createUser = async (user) => Doctor.create(user)

exports.getUserById = async (userId) => Doctor.findByPk(userId)
