const fs = require('fs')
const profileService = require('../services/profile-service')
const uploadService = require('../services/upload-service')

exports.editMyProfile = async (req, res, next) => {
    try {
        const { id, role } = req.user
        console.log(payload)

        if (role == 'doctor') {
            const rs = await profileService.editDoctorProfileById(payload, id)
            res.json(rs)
        }
        if (role == 'provider') {
            const rs = await profileService.editProviderProfileById(payload, id)
            res.json(rs)
        }
    } catch (err) {
        next(err)
    }
}

exports.uploadImage = async (req, res, next) => {
    try {
        const { role, id } = req.user
        if (!req.files.profileImage && !req.files.coverImage) {
            createError('profile image or cover image is required')
        }

        const updateValue = {}
        if (req.files.profileImage) {
            const result = await uploadService.upload(
                req.files.profileImage[0].path
            )
            updateValue.profileImage = result.secure_url
        }
        if (req.files.coverImage) {
            const result = await uploadService.upload(
                req.files.coverImage[0].path
            )
            updateValue.coverImage = result.secure_url
        }

        if (role == 'doctor') {
            await profileService.editDoctorProfileById(updateValue, id)
            res.status(200).json(updateValue)
        }

        if (role == 'provider') {
            await profileService.editProviderProfileById(updateValue, id)
            res.status(200).json(updateValue)
        }
    } catch (err) {
        next(err)
    } finally {
        if (req.files.profileImage) {
            fs.unlinkSync(req.files.profileImage[0].path)
        }
        if (req.files.coverImage) {
            fs.unlinkSync(req.files.coverImage[0].path)
        }
    }
}

exports.getDoctorProfileById = async (req, res, next) => {
    try {
        const { id } = req.params
        // console.log(id)
        const profile = await profileService.getDoctorProfileById(id)
        res.json(profile)
    } catch (err) {
        next(err)
    }
}
exports.getProviderProfileById = async (req, res, next) => {
    try {
        const { id } = req.params
        const profile = await profileService.getProviderProfileById(id)
        const follower = await profileService.getFollowerById(id)
        const profileObj = JSON.parse(JSON.stringify(profile))
        const followerArr = JSON.parse(JSON.stringify(follower))
        const rs = { ...profileObj, follower: followerArr.length, id: id }
        res.json(rs)
    } catch (err) {
        next(err)
    }
}

exports.getProvince = async (req, res, next) => {
    try {
        const province = await profileService.getProvince()
        res.json(province)
    } catch (err) {
        next(err)
    }
}

exports.doctorFollow = async (req, res, next) => {
    try {
        const { providerId } = req.params
        const rs = await profileService.doctorFollowed(req.user.id, providerId)
        res.json(rs)
    } catch (err) {
        next(err)
    }
}

exports.followProvider = async (req, res, next) => {
    try {
        const { providerId } = req.params

        const checkFollowed = await profileService.checkFollowed(
            req.user.id,
            providerId
        )
        if (checkFollowed.length > 0) {
            const rs = await profileService.updateFollowProvider(
                req.user.id,
                providerId
            )
            res.json(rs)
        } else {
            const rs = await profileService.createfollowProvider(
                req.user.id,
                providerId
            )
            res.json(rs)
        }
    } catch (err) {
        next(err)
    }
}

exports.unfollowProvider = async (req, res, next) => {
    try {
        const { providerId } = req.params
        const unFollow = await profileService.unFollow(req.user.id, providerId)
        res.json(unFollow)
    } catch (err) {
        next(err)
    }
}
