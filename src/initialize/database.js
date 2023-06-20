//ไฟล์นี้ใช้สำหรับ drop database ทั้งหมดทิ้ง แล้วเขียนใหม่
//ใช้คำสั่ง pnpm db:sync

const { sequelize } = require('../models')
sequelize.sync({ force: true })
