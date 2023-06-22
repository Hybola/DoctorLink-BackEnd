const { Post, FullTime, PartTime } = require('../models')

exports.newpost = async (post) => Post.create(post)
exports.newfull = async (full) => FullTime.create(full)
exports.newpart = async (part) => PartTime.create(part)
