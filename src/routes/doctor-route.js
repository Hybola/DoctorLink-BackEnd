const express = require('express')
const authDoctorController = require('../controllers/authDoctor-controller')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')

router.post('/register', authDoctorController.register)
router.post('/login', authDoctorController.login)
router.get('/me', authenticate, authDoctorController.getMe)

module.exports = router
