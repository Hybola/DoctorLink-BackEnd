const express = require('express')
const postController = require('../controllers/post-controller')
const router = express.Router()
// const authDoctorMiddleware = require('../middlewares/doctor-authenticate')

router.post('/createpost', postController.createpost)
router.get('/getallpost', postController.getAllPost)
router.post('/filterjob', postController.filterJob)

// router.get('/getpost/:id', postController.getpostbyid)
// router.delete('/delete', postController.deletepost)
// router.put('/editpost', postController.editpost)

module.exports = router
