const { Doctor, Provider, Province, Follow, Post } = require('../models')

exports.getFollowerById = (id) =>
    Follow.findAll({
        where: {
            providerId: id,
        },
    })

exports.getFollowedById = (id) =>
    Follow.findAll({
        where: {
            doctorId: id,
        },
    })
