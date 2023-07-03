const express = require('express')
const postController = require('../controllers/post-controller')
const authenticate = require('../middlewares/authenticate')
const router = express.Router()

router.post('/createpost', authenticate, postController.createpost)
router.get('/getallpost', postController.getAllPost)
router.post('/filterjob', postController.filterJob)

// router.get('/getpost/:id', postController.getpostbyid)
// router.delete('/delete', postController.deletepost)
// router.put('/editpost', postController.editpost)

module.exports = router
