const multer = require("multer");
////diskStorage คือเก็บข้อมูลไว้ใน hardisk
////memoryStorage คือเก็บข้อมูลใน RAM ชั่วคราว รอการอัพโหลดไปที่ cloud เป็นต้น\

//// cb() = callback function (error, 'public/image')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // console.log(file);
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().getTime() +
        "" +
        Math.round(Math.random() * 100000) +
        "." +
        file.mimetype.split("/")[1]
    ); // พารามิเตอร์ตัวที่ 2 ใช้ตั้งชื่อไฟล์
  },
});

module.exports = multer({ storage: storage });
