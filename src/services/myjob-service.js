const { SavedJob } = require('../models')

exports.getSavedJobById = (id) =>
    SavedJob.findAll({
        where: {
            doctorId: id,
        },
    })
