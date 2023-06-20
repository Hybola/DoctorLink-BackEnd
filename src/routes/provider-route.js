const express = require('express')
const authProviderController = require('../controllers/authProvider-controller')
const router = express.Router()
const authProviderMiddleware = require('../middlewares/provider-authenticate')

router.post('/register', authProviderController.register)
router.post('/login', authProviderController.login)
router.get('/me', authProviderMiddleware, authProviderController.getMe)

module.exports = router
