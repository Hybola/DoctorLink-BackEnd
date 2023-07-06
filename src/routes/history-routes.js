const express = require('express')
const authDoctorController = require('../controllers/authDoctor-controller')
const authProviderController = require('../controllers/authProvider-controller')
const historyController = require('../controllers/history-controller')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')

// // doctor
// router.post('/doctor/register', authDoctorController.register)
// router.post('/doctor/login', authDoctorController.login)
// router.get('/doctor/me', authenticate, authDoctorController.getMe)

// // provider

// router.post('/provider/register', authProviderController.register)
// router.post('/provider/login', authProviderController.login)
// router.get('/provider/me', authenticate, authProviderController.getMe)
// router.get('/doctor/me', authenticate, authDoctorController.getMe)
router.get('/lists', authenticate, historyController.getListsById)
router.get('/job', authenticate, historyController.getJobById)
router.get('/closejob', authenticate, historyController.getCloseJob)
router.post(
    '/update-selected-doctor',
    authenticate,
    historyController.updateSelectedDoctor
)
router.patch(
    '/edit-job-post/:postId',
    authenticate,
    historyController.EditJobPostByPostId
)
router.get(
    '/get-provider-profile',
    authenticate,
    historyController.GetProviderProfile
)
module.exports = router
