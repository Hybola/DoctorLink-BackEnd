const { Doctor, Provider, Province, Follow } = require('../models')

exports.getDoctorProfileById = (id) =>
    Doctor.findOne({
        where: {
            id,
        },
        attributes: [
            'id',
            'profileName',
            'description',
            'profileImage',
            'coverImage',
            'mobile',
            'lineId',
        ],
    })

exports.getProviderProfileById = (id) =>
    Provider.findOne({
        where: {
            id,
        },
        include: {
            model: Province,
            attributes: ['name'],
        },
        attributes: [
            'id',
            'providerName',
            'description',
            'profileImage',
            'coverImage',
            'address',
            'provinceId',
            'googleMap',
            'mobile',
            'lineId',
        ],
    })

exports.getFollowerById = (providerId) =>
    Follow.findAll({
        where: { providerId },
    })

exports.editDoctorProfileById = (payload, id) =>
    Doctor.update(payload, {
        where: {
            id: id,
        },
    })

exports.editProviderProfileById = (payload, id) =>
    Provider.update(payload, {
        where: {
            id: id,
        },
    })
