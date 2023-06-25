const express = require('express')
const authDoctorController = require('../controllers/authDoctor-controller')
const authProviderController = require('../controllers/authProvider-controller')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')

// doctor
router.post('/doctor/register', authDoctorController.register)
router.post('/doctor/login', authDoctorController.login)
router.get('/doctor/me', authenticate, authDoctorController.getMe)

// provider

router.post('/provider/register', authProviderController.register)
router.post('/provider/login', authProviderController.login)
router.get('/provider/me', authenticate, authProviderController.getMe)

module.exports = router
