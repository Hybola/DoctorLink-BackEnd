const cloudinary = require('../config/cloudinary')
exports.upload = (path) => cloudinary.uploader.upload(path) //ระบุตำแหน่งที่เก็บไฟล์ไว้
exports.delete = (path) => {
    let pathArr = path.split('/')
    let index = pathArr.length - 1
    let fileName = pathArr[index].split('.') //แยกชื่อ file กับ นามสกุล ออกจากกัน
    cloudinary.uploader.destroy(fileName[0]) // ส่งไปเฉพาะชื่อไฟล์
}
