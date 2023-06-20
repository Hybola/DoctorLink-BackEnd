module.exports = (err, req, res, next) => {
    console.log(err)
    //"ValidationError" คือ error ที่ return มาจาก library Joi เวลาที่ authenticate ไม่ผ่าน ซึ่งมี error return
    if (err.name === 'ValidationError') {
        err.statusCode = 400
    }
    res.status(err.statusCode || 500).json({ message: err.message })
}
