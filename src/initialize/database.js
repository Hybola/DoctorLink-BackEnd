//ไฟล์นี้ใช้สำหรับ drop database ทั้งหมดทิ้ง แล้วเขียนใหม่
//ใช้คำสั่ง pnpm db:sync

const {
    sequelize,
    Doctor,
    Follow,
    FullTime,
    JobInterest,
    JobPost,
    PartTime,
    Provider,
    Province,
    SavedJob,
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
            email: 'Naeramit@gmail.com',
            password: '123456',
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
            password: '123456',
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
            password: '123456',
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
            password: '123456',
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
            password: '123456',
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
        { id: 1, name: 'Bangkok' },
        { id: 2, name: 'Pathumtani' },
        { id: 3, name: 'Chiangmai' },
        { id: 4, name: 'Chonburi' },
        { id: 5, name: 'Phuket' },
        { id: 6, name: 'Rayong' },
        { id: 7, name: 'Khonkaen' },
        { id: 8, name: 'Chachoengsao' },
        { id: 9, name: 'Samutsakhon' },
        { id: 10, name: 'Ayutthaya' },
        { id: 11, name: 'Nonthaburi' },
    ])

    await Provider.bulkCreate([
        {
            id: 1,
            email: 'clinic@gmail.com',
            password: '123456',
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
            password: '123456',
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
            startDateTime: '2023-06-28',
            endDateTime: '2023-06-28',
            provinceId: '1',
            jobType: 'FullTime',
            status: 'active',
            statusDetail: 'รับสมัคร',
            providerId: 1,
        },
        {
            id: 2,
            title: 'ต้องการหมอ 1 คน',
            location: 'กรุงเทพ  ดินแดง',
            map: 'https://goo.gl/maps/mjW9k2hbVEWSvQj28',
            line: '@naeramitHospital',
            phone: '0817518953',
            startDateTime: '2023-06-28',
            endDateTime: '2023-06-28',
            provinceId: '1',
            jobType: 'FullTime',
            status: 'active',
            statusDetail: 'รับสมัคร',
            providerId: 1,
        },
        {
            id: 3,
            title: 'ต้องการหมอ 1 คน',
            location: 'สมุทรปราการ  บางพลี',
            map: 'https://goo.gl/maps/mjW9k2hbVEWSvQj28',
            line: '@naeramitHospital',
            phone: '0817518953',
            startDateTime: '2023-06-28',
            endDateTime: '2023-06-28',
            wage: '20000',
            provinceId: '2',
            jobType: 'PartTime',
            status: 'active',
            statusDetail: 'รับสมัคร',
            providerId: 1,
        },
        {
            id: 4,
            title: 'ต้องการหมอ 1 คน',
            location: 'สมุทรปราการ  บางพลี',
            map: 'https://goo.gl/maps/mjW9k2hbVEWSvQj28',
            line: '@naeramitHospital',
            phone: '0817518953',
            startDateTime: '2023-06-28',
            endDateTime: '2023-06-28',
            wage: '20000',
            provinceId: '2',
            jobType: 'PartTime',
            status: 'active',
            statusDetail: 'รับสมัคร',
            providerId: 1,
        },
    ])
    await FullTime.bulkCreate([
        {
            id: 1,
            jobDes: 'ต้องการหมอ 1 คน ด่วนมาก',
            workingDay: 'จันทร์-ศุกร์',
            startDate: '2023-06-28',
            salary: '80000',
            annual: '1000',
            benefit: '300',
            other: 'ไม่มี',
            jobPostId: 1,
        },
        {
            id: 2,
            jobDes: 'ต้องการหมอ 1 คน ด่วนมาก',
            workingDay: 'เสาร์-อาทิตย์',
            startDate: '2023-06-28',
            salary: '10000',
            annual: '1000',
            benefit: '300',
            other: 'ไม่มี',
            jobPostId: 1,
        },
    ])

    await PartTime.bulkCreate([
        {
            id: 1,
            jobDes: 'ต้องการหมอ 1 คน ด่วนมาก',
            startDateTime: '2023-06-28 08:00:00',
            endDateTime: '2023-06-28 17:00:00',
            wage: '80000',
            other: 'ไม่มี',
            jobPostId: 3,
        },
        {
            id: 2,
            jobDes: 'ต้องการหมอ 1 คน ด่วนมาก',
            startDateTime: '2023-06-28 08:00:00',
            endDateTime: '2023-06-28 17:00:00',
            wage: '50000',
            other: 'ไม่มี',
            jobPostId: 4,
        },
    ])
    await JobInterest.bulkCreate([
        { id: 1, status: 1, jobPostId: 1, providerId: 1, doctorId: 1 },
        { id: 2, status: 1, jobPostId: 2, providerId: 1, doctorId: 1 },
        { id: 3, status: 1, jobPostId: 1, providerId: 2, doctorId: 2 },
        { id: 4, status: 1, jobPostId: 2, providerId: 2, doctorId: 2 },
    ])
    // await Follow.bulkCreate([{}])
    // await SavedJob.bulkCreate([{}])
    process.exit()
}
main()
