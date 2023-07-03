const express = require('express')
const postController = require('../controllers/post-controller')
const authenticate = require('../middlewares/authenticate')
const doctorAuthenticate = require('../middlewares/doctor-authenticate')
const providerAuthenticate = require('../middlewares/provider-authenticate')
const router = express.Router()

router.post('/createpost', authenticate, postController.createpost)
router.get('/getallpost', postController.getAllPost)
router.post('/filterjob', postController.filterJob)

router.get(
    '/provider/:providerId',
    authenticate,
    postController.getPostbyProviderId
)

router.get('/:id/', authenticate, postController.getPostById)
// router.delete('/delete', postController.deletepost)
// router.put('/editpost', postController.editpost)

module.exports = router
