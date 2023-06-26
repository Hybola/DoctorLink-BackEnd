const express = require('express')
const followController = require('../controllers/follow-controller')
const router = express.Router()

router.get('/provider/:id/follower', followController.getFollowerById)
router.get('/doctor/:id/follwed', followController.getFollowedById)


module.exports = router
