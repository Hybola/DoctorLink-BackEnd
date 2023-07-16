const express = require('express')
const profileController = require('../controllers/profile-controller')
const upload = require('../middlewares/upload')

const authenticate = require('../middlewares/authenticate')
const doctorAuthenticate = require('../middlewares/doctor-authenticate')
const providerAuthenticate = require('../middlewares/provider-authenticate')

const router = express.Router()

// doctor
router.patch(
    '/doctor/myprofile',
    authenticate,
    doctorAuthenticate,
    profileController.editMyProfile
)

// provider
router.patch(
    '/provider/myprofile',
    authenticate,
    providerAuthenticate,
    profileController.editMyProfile
)

// both
router.patch(
    '/image',
    authenticate,
    upload.fields([
        { name: 'profileImage', maxCount: 1 },
        { name: 'coverImage', maxCount: 1 },
    ]),
    profileController.uploadImage
)
router.get('/provider/:id', profileController.getProviderProfileById)
router.get('/doctor/:id', profileController.getDoctorProfileById)
router.get('/province', profileController.getProvince)
router.get(
    '/doctorfollow/:providerId',
    authenticate,
    profileController.doctorFollow
)
router.post(
    '/follow/:providerId',
    authenticate,
    doctorAuthenticate,
    profileController.followProvider
)
router.post(
    '/unfollow/:providerId',
    authenticate,
    doctorAuthenticate,
    profileController.unfollowProvider
)
module.exports = router
