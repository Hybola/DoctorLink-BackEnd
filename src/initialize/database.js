//ไฟล์นี้ใช้สำหรับ drop database ทั้งหมดทิ้ง แล้วเขียนใหม่
//ใช้คำสั่ง pnpm db:sync

const {
    sequelize,
    Doctor,
    Follow,
    FullTime,
    JobPost,
    PartTime,
    Provider,
    Province,
    DoctorJob,
} = require('../models')

const main = async () => {
    await sequelize.sync({ force: true })

    await Doctor.bulkCreate([
        {
            id: 1,
            profileName: 'Naeramit',
            firstName: 'Naeramit',
            lastName: 'Ridtiya',
            profileName: 'Naeramit',
            email: 'naeramit.18@gmail.com',
            password:
                '$2a$10$RiK0keiI63OCRsdFgvHcxuEh8HcpYHWznCnsT9sPtuur3YUv6EQBe',
            mobile: '0895674332',
            profileImage: 'https://picsum.photos/200/300',
            licenseNumber: '123456789',
            thainationalId: '1234567890123',
            coverImage:
                'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687809985/gdoyj502akt7onbgtb8p.png',

            description: ' Test test',
            lineId: '@naeramit',
        },
        {
            id: 2,
            profileName: 'janny',
            firstName: 'janny',
            lastName: 'okmigo',
            profileName: 'janny',
            email: 'janny@gmail.com',
            password:
                '$2a$10$RiK0keiI63OCRsdFgvHcxuEh8HcpYHWznCnsT9sPtuur3YUv6EQBe',
            mobile: '0895671332',
            profileImage: 'https://picsum.photos/200/300',
            licenseNumber: '123456789',
            thainationalId: '1234567890123',
            coverImage:
                'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687809985/gdoyj502akt7onbgtb8p.png',

            description: ' Test test',
            lineId: '@janny',
        },
        {
            id: 3,
            profileName: 'jame',
            firstName: 'jame',
            lastName: 'ubon',
            profileName: 'jame',
            email: 'jame@gmail.com',
            password:
                '$2a$10$RiK0keiI63OCRsdFgvHcxuEh8HcpYHWznCnsT9sPtuur3YUv6EQBe',
            mobile: '0895624332',
            profileImage: 'https://picsum.photos/200/300',
            licenseNumber: '123456789',
            thainationalId: '1234567890123',
            coverImage:
                'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687809985/gdoyj502akt7onbgtb8p.png',

            description: ' Test test',
            lineId: '@jame',
        },
        {
            id: 4,
            profileName: 'joy',
            firstName: 'joy',
            lastName: 'royua',
            profileName: 'jay',
            email: 'jay@gmail.com',
            password:
                '$2a$10$RiK0keiI63OCRsdFgvHcxuEh8HcpYHWznCnsT9sPtuur3YUv6EQBe',
            mobile: '0895673332',
            profileImage: 'https://picsum.photos/200/300',
            licenseNumber: '123456789',
            thainationalId: '1234567890123',
            coverImage:
                'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687809985/gdoyj502akt7onbgtb8p.png',

            description: ' Test test',
            lineId: '@joy',
        },
        {
            id: 5,
            profileName: 'jub',
            firstName: 'jub',
            lastName: 'jang',
            profileName: 'jub',
            email: 'jub@gmail.com',
            password:
                '$2a$10$RiK0keiI63OCRsdFgvHcxuEh8HcpYHWznCnsT9sPtuur3YUv6EQBe',
            mobile: '0895474332',
            profileImage: 'https://picsum.photos/200/300',
            licenseNumber: '123456789',
            thainationalId: '1234567890123',
            coverImage:
                'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687809985/gdoyj502akt7onbgtb8p.png',

            description: ' Test test',
            lineId: '@jub',
        },
    ])
    await Province.bulkCreate([
        { id: 1, abbrievation: 'ETC', name: 'Other' },
        { id: 2, abbrievation: 'BKK', name: 'Bangkok' },
        { id: 3, abbrievation: 'PTE', name: 'Phatumthani' },
        { id: 4, abbrievation: 'CMI', name: 'Chiangmai' },
        { id: 5, abbrievation: 'CBI', name: 'Chonburi' },
        { id: 6, abbrievation: 'PKT', name: 'Phuket' },
        { id: 7, abbrievation: 'RYG', name: 'Rayong' },
        { id: 8, abbrievation: 'KKN', name: 'Khonkaen' },
        { id: 9, abbrievation: 'CCO', name: 'Chachoengsao' },
        { id: 10, abbrievation: 'SKN', name: 'Samutsakhon' },
        { id: 11, abbrievation: 'AYA', name: 'Ayuthaya' },
        { id: 12, abbrievation: 'NBI', name: 'Nonthaburi' },
    ])
    await Provider.bulkCreate([
        {
            id: 1,
            email: 'clinic@gmail.com',
            password:
                '$2a$10$RiK0keiI63OCRsdFgvHcxuEh8HcpYHWznCnsT9sPtuur3YUv6EQBe',
            providerName: 'Naeramit Clinic',
            description: 'A clinic in  Uthai Thani \n#minimal ',
            profileImage:
                'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687720119/kkyme39awgwcc51rthli.png',
            coverImage:
                'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687810604/sddfeye88csyjocvfabl.png',
            address: '539 ม.3',
            provinceId: null,
            googleMap: 'https://goo.gl/maps/nkSAbhnh6mArW8tG6',
            mobile: '0895674332',
            lineId: 'naeramit',
            Province: null,
            follower: 0,
        },
        {
            id: 2,
            email: 'hospotal@gmail.com',
            password:
                '$2a$10$RiK0keiI63OCRsdFgvHcxuEh8HcpYHWznCnsT9sPtuur3YUv6EQBe',
            providerName: 'Naeramit Hospital',
            description: 'A Hospital in  Uthai Thani \n#minimal ',
            profileImage:
                'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687720119/kkyme39awgwcc51rthli.png',
            coverImage:
                'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687810604/sddfeye88csyjocvfabl.png',
            address: '539 ม.3',
            provinceId: null,
            googleMap: 'https://goo.gl/maps/nkSAbhnh6mArW8tG6',
            mobile: '089567432ß2',
            lineId: 'naeramit',
            Province: null,
            follower: 0,
        },
    ])
    await JobPost.bulkCreate([
        {
            id: 1,
            title: 'ต้องการหมอ 1 คน',
            location: 'กรุงเทพ เขตสาทร',
            map: 'https://goo.gl/maps/mjW9k2hbVEWSvQj28',
            line: '@naeramitHospital',
            phone: '0817518953',
            startDate: '2023-06-25',
            endDate: '2023-06-28',
            provinceId: '1',
            jobType: 'FullTime',
            status: 'active',
            stage: 1,
            providerId: 1,
        },
        {
            id: 2,
            title: 'ต้องการหมอ 2 คน',
            location: 'กรุงเทพ  ดินแดง',
            map: 'https://goo.gl/maps/mjW9k2hbVEWSvQj28',
            line: '@naeramitHospital',
            phone: '0817518953',
            startDate: '2023-06-26',
            endDate: '2023-06-28',
            provinceId: '1',
            jobType: 'FullTime',
            status: 'active',
            stage: 1,
            providerId: 1,
        },
        {
            id: 3,
            title: 'ต้องการหมอ 3 คน',
            location: 'สมุทรปราการ  บางพลี',
            map: 'https://goo.gl/maps/mjW9k2hbVEWSvQj28',
            line: '@naeramitHospital',
            phone: '0817518953',
            startDate: '2023-06-27',
            endDate: '2023-06-28',
            wage: '20000',
            provinceId: '2',
            jobType: 'PartTime',
            status: 'active',
            stage: 1,
            providerId: 1,
        },
        {
            id: 4,
            title: 'ต้องการหมอ 4 คน',
            location: 'สมุทรปราการ  บางพลี',
            map: 'https://goo.gl/maps/mjW9k2hbVEWSvQj28',
            line: '@naeramitHospital',
            phone: '0817518953',
            startDate: '2023-06-28',
            endDate: '2023-06-28',
            wage: '20000',
            provinceId: '2',
            jobType: 'PartTime',
            status: 'active',
            stage: 1,
            providerId: 1,
        },
        {
            id: 5,
            title: 'ต้องการหมอ 5 คน',
            location: 'สมุทรปราการ  บางพลี',
            map: 'https://goo.gl/maps/mjW9k2hbVEWSvQj28',
            line: '@naeramitHospital',
            phone: '0817518953',
            startDate: '2023-05-01',
            endDate: '2023-06-28',
            wage: '20000',
            provinceId: '2',
            jobType: 'PartTime',
            status: 'inactive',
            stage: 1,
            providerId: 1,
        },
        {
            id: 6,
            title: 'ต้องการหมอ 6 คน',
            location: 'สมุทรปราการ  บางพลี',
            map: 'https://goo.gl/maps/mjW9k2hbVEWSvQj28',
            line: '@naeramitHospital',
            phone: '0817518953',
            startDate: '2023-05-02',
            endDate: '2023-06-28',
            wage: '20000',
            provinceId: '2',
            jobType: 'PartTime',
            status: 'inactive',
            stage: 1,
            providerId: 1,
        },
    ])
    await FullTime.bulkCreate([
        {
            id: 1,
            jobDes: 'ต้องการหมอ 4 คน ด่วนมาก',
            workingDay: 'จันทร์-ศุกร์',
            startDate: '2023-06-22',
            salary: '80000',
            annual: '1000',
            benefit: '300',
            other: 'ไม่มี',
            jobPostId: 1,
        },
        {
            id: 2,
            jobDes: 'ต้องการหมอ 5 คน ด่วนมาก',
            workingDay: 'เสาร์-อาทิตย์',
            startDate: '2023-06-23',
            salary: '10000',
            annual: '1000',
            benefit: '300',
            other: 'ไม่มี',
            jobPostId: 2,
        },
    ])
    await PartTime.bulkCreate([
        {
            id: 1,
            jobDes: 'ต้องการหมอ 2 คน ด่วนมาก',
            startDate: '2023-06-24 08:00:00',
            endDate: '2023-06-28 17:00:00',
            wage: '80000',
            other: 'ไม่มี',
            jobPostId: 3,
        },
        {
            id: 2,
            jobDes: 'ต้องการหมอ 3คน ด่วนมาก',
            startDate: '2023-06-25 08:00:00',
            endDate: '2023-06-28 17:00:00',
            wage: '50000',
            other: 'ไม่มี',
            jobPostId: 4,
        },
        {
            id: 3,
            jobDes: 'ต้องการหมอ 4คน ด่วนมาก',
            startDate: '2023-05-03 08:00:00',
            endDate: '2023-06-28 17:00:00',
            wage: '50000',
            other: 'ไม่มี',
            jobPostId: 5,
        },
        {
            id: 4,
            jobDes: 'ต้องการหมอ 5คน ด่วนมาก',
            startDate: '2023-05-05 08:00:00',
            endDate: '2023-06-28 17:00:00',
            wage: '50000',
            other: 'ไม่มี',
            jobPostId: 6,
        },
    ])

    // await Follow.bulkCreate([{}])
    await DoctorJob.bulkCreate([
        { id: 1, status: 1, jobPostId: 1, doctorId: 1 },
        { id: 2, status: 2, jobPostId: 2, doctorId: 1 },
        { id: 3, status: 2, jobPostId: 3, doctorId: 1 },
        { id: 4, status: 3, jobPostId: 4, doctorId: 1 },
    ])

    process.exit()
}
main()
