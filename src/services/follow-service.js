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
            status: 1,
        },
        include: {
            model: Provider,
            attributes: ['id', 'providerName', 'profileImage', 'description'],
        },
    })
exports.unFollowerById = (followId) =>
    Follow.update(
        { status: 0 },
        {
            where: {
                status: 1,
                id: followId,
            },
        }
    )
