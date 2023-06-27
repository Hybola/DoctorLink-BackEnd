const { JobPost, FullTime, PartTime } = require('../models')

exports.newpost = async (post) => JobPost.create(post)
exports.newfull = async (full) => FullTime.create(full)
exports.newpart = async (part) => PartTime.create(part)

exports.getall = async (post) => JobPost.findAll(post)

// exports.getid = async (id) => JobPost.findOne(id)
