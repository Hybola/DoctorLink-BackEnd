const express = require('express')
const authDoctorController = require('../controllers/authDoctor-controller')
const router = express.Router()
const authDoctorMiddleware = require('../middlewares/doctor-authenticate')

router.post('/register', authDoctorController.register)
router.post('/login', authDoctorController.login)
router.get('/me', authDoctorMiddleware, authDoctorController.getMe)

module.exports = router
