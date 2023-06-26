const express = require('express')
const postController = require('../controllers/post-controller')
const router = express.Router()

router.post('/createpost', postController.createpost)

module.exports = router
