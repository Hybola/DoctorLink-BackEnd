const express = require('express')
const authDoctorController = require('../controllers/authDoctor-controller')
const authProviderController = require('../controllers/authProvider-controller')

const router = express.Router()
const authenticate = require('../middlewares/authenticate')

/// Doctor
router.post('/doctor/register', authDoctorController.register)
router.post('/doctor/login', authDoctorController.login)
router.post('/doctor/logingoogle', authDoctorController.logingoogle)
router.get('/doctor/me', authenticate, authDoctorController.getMe)

/// Provider
router.post('/provider/register', authProviderController.register)
router.post('/provider/login', authProviderController.login)
router.post('/provider/logingoogle', authProviderController.logingoogle)
router.get('/provider/me', authenticate, authProviderController.getMe)

module.exports = router
