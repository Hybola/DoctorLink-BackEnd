const express = require('express')
const myJobController = require('../controllers/myJob-controller')

const router = express.Router()

router.get('/savedjob', myJobController.getAllSavedJob)

module.exports = router
