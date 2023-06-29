const express = require('express')
const myJobController = require('../controllers/myJob-controller')

const router = express.Router()

router.put('/savedjob/:jobpostId', myJobController.savedJob)
router.get('/savedjob', myJobController.getAllSavedJob)
router.patch('/unsavedjob/:id', myJobController.unSavedJob)

router.put('/interestedjob/:jobpostId', myJobController.interestJob)
router.get('/interestedjob/', myJobController.getInterestJob)
router.patch('/uptointerestedjob/:id', myJobController.uptoInterestJob)
router.patch('/uninterestedjob/:id', myJobController.downtoSaveJob)

module.exports = router
