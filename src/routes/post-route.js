const express = require('express')
const postController = require('../controllers/post-controller')
const authenticate = require('../middlewares/authenticate')
const doctorAuthenticate = require('../middlewares/doctor-authenticate')
const router = express.Router()

router.post('/createpost', authenticate, postController.createpost)
router.get('/getallpost', postController.getAllPost)
router.post('/filterjob', postController.filterJob)

router.get('/doctor/provider/:providerId',authenticate,doctorAuthenticate, postController.doctorGetPostbyProviderId)
router.get('/:id/doctor',authenticate,doctorAuthenticate, postController.doctorGetPostById)
// router.delete('/delete', postController.deletepost)
// router.put('/editpost', postController.editpost)

module.exports = router
