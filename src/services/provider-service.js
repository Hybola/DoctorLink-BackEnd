const { Provider } = require("../models");

exports.checkEmailExist = async (email) => {
    const existUser = await Provider.findOne({
        where: {
            email,
        },
    })
    return !!existUser
}

exports.getUserByEmail = async (email) => {
    return await Provider.findOne({
        where: {
            email: email,
        },
    })
}
exports.createUser = async (user) => Provider.create(user)

exports.getUserById = async (userId) => Provider.findByPk(userId)
