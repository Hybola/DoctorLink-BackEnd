// ====== รอเขียน model user นะ
// const { User } = require("../models");

exports.getUserByEmail = async (email) => {
    return await User.findOne({
        where: {
            email: email,
        },
    })
}
exports.createUser = async (user) => User.create(user)

exports.getUserById = async (userId) => User.findByPk(userId)
