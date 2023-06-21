const express = require('express')
const authProviderController = require('../controllers/authProvider-controller')
const router = express.Router()
// const authProviderMiddleware = require('../middlewares/provider-authenticate')
const authenticate = require('../middlewares/authenticate')

router.post('/register', authProviderController.register)
router.post('/login', authProviderController.login)
router.get('/me', authenticate, authProviderController.getMe)

module.exports = router
