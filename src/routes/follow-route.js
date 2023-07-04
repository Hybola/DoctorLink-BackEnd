const express = require('express')
const followController = require('../controllers/follow-controller')
const router = express.Router()

router.get('/provider/:id/follower', followController.getFollowerById)
router.get('/doctor/:id/followed', followController.getFollowedById)
router.patch('/unfollowed/:followId', followController.unFollowerById)

module.exports = router
