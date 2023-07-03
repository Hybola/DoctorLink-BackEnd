const { Doctor, Provider, Province, Follow, Post } = require('../models')
const { Op } = require('sequelize')

exports.getDoctorProfileById = (id) =>
    Doctor.findOne({
        where: {
            id,
        },
        attributes: [
            'profileName',
            'firstName',
            'lastName',
            'description',
            'profileImage',
            'coverImage',
            'mobile',
            'lineId',
            'gender',
            'birthDate',
            'education',
            'workExperience',
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

exports.getProvince = () => Province.findAll()
