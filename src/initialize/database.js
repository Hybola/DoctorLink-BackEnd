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
            firstName: 'Terry',
            lastName: 'Fredson',
            profileName: 'Marje',
            email: 'nfredson0@washingtonpost.com',
            password:
                '$2a$10$RiK0keiI63OCRsdFgvHcxuEh8HcpYHWznCnsT9sPtuur3YUv6EQBe',
            mobile: '357-218-6235',
            profileImage:
                'https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
            licenceNumber: '293691460-4',
            thainationalId: 1345258965329,
            coverImage:
                'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            lineId: 'Noellyn',
            gender: 2,
            birthDate: '1986-11-17',
        },
        {
            id: 2,
            firstName: 'Benjamin',
            lastName: 'Weekley',
            profileName: 'Scottie',
            email: 'mweekley1@usgs.gov',
            password:
                '$2a$10$RiK0keiI63OCRsdFgvHcxuEh8HcpYHWznCnsT9sPtuur3YUv6EQBe',
            mobile: '552-409-1129',
            profileImage:
                'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            licenceNumber: '153227484-X',
            thainationalId: 1345258965329,
            coverImage:
                'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            lineId: 'Monroe',
            gender: 1,
            birthDate: '1982-03-31',
        },
        {
            id: 3,
            firstName: 'Druci',
            lastName: 'Stennard',
            profileName: 'Loreen',
            email: 'ostennard2@comcast.net',
            password:
                '$2a$10$RiK0keiI63OCRsdFgvHcxuEh8HcpYHWznCnsT9sPtuur3YUv6EQBe',
            mobile: '571-276-7017',
            profileImage:
                'https://images.unsplash.com/photo-1665686310934-8fab52b3821b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            licenceNumber: '014913857-1',
            thainationalId: 1345258965329,
            coverImage:
                'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            lineId: 'Olga',
            gender: 2,
            birthDate: '1991-06-29',
        },
        {
            id: 4,
            firstName: 'Olivette',
            lastName: 'Whawell',
            profileName: 'Faustina',
            email: 'jwhawell3@ning.com',
            password:
                '$2a$10$RiK0keiI63OCRsdFgvHcxuEh8HcpYHWznCnsT9sPtuur3YUv6EQBe',
            mobile: '960-305-2970',
            profileImage:
                'https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            licenceNumber: '244831964-2',
            thainationalId: 1345258965329,
            coverImage:
                'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            lineId: 'Juliette',
            gender: 2,
            birthDate: '1982-10-06',
        },
        {
            id: 5,
            firstName: 'Igor',
            lastName: 'Healings',
            profileName: 'Forester',
            email: 'whealings4@issuu.com',
            password:
                '$2a$10$RiK0keiI63OCRsdFgvHcxuEh8HcpYHWznCnsT9sPtuur3YUv6EQBe',
            mobile: '847-633-0240',
            profileImage:
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            licenceNumber: '504953124-1',
            thainationalId: 1345258965329,
            coverImage:
                'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            lineId: 'Wyatan',
            gender: 1,
            birthDate: '1991-11-15',
        },
        {
            id: 6,
            firstName: 'Cathy',
            lastName: 'Toplis',
            profileName: 'Arleta',
            email: 'ctoplis5@theglobeandmail.com',
            password:
                '$2a$10$RiK0keiI63OCRsdFgvHcxuEh8HcpYHWznCnsT9sPtuur3YUv6EQBe',
            mobile: '295-581-6039',
            profileImage:
                'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            licenceNumber: '030721495-8',
            thainationalId: 1345258965329,
            coverImage:
                'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            lineId: 'Chloris',
            gender: 2,
            birthDate: '1990-11-01',
        },
        {
            id: 7,
            firstName: 'Aguie',
            lastName: 'Sims',
            profileName: 'Emlyn',
            email: 'csims6@buzzfeed.com',
            password:
                '$2a$10$RiK0keiI63OCRsdFgvHcxuEh8HcpYHWznCnsT9sPtuur3YUv6EQBe',
            mobile: '652-797-6214',
            profileImage:
                'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            licenceNumber: '904843537-4',
            thainationalId: 1345258965329,
            coverImage:
                'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            lineId: 'Clyve',
            gender: 1,
            birthDate: '1989-08-09',
        },
        {
            id: 8,
            firstName: 'Goldina',
            lastName: 'Auston',
            profileName: 'Therese',
            email: 'jauston7@fc2.com',
            password:
                '$2a$10$RiK0keiI63OCRsdFgvHcxuEh8HcpYHWznCnsT9sPtuur3YUv6EQBe',
            mobile: '953-539-9903',
            profileImage:
                'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            licenceNumber: '896120297-9',
            thainationalId: 1345258965329,
            coverImage:
                'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            lineId: 'Janene',
            gender: 2,
            birthDate: '1983-08-25',
        },
        {
            id: 9,
            firstName: 'Yale',
            lastName: 'Isgate',
            profileName: 'Dugald',
            email: 'aisgate8@surveymonkey.com',
            password:
                '$2a$10$RiK0keiI63OCRsdFgvHcxuEh8HcpYHWznCnsT9sPtuur3YUv6EQBe',
            mobile: '822-419-5337',
            profileImage:
                'https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            licenceNumber: '329714227-8',
            thainationalId: 1345258965329,
            coverImage:
                'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            lineId: 'Ashlin',
            gender: 1,
            birthDate: '1983-04-24',
        },
        {
            id: 10,
            firstName: 'Donny',
            lastName: 'Sodory',
            profileName: 'Meade',
            email: 'csodory9@nydailynews.com',
            password:
                '$2a$10$RiK0keiI63OCRsdFgvHcxuEh8HcpYHWznCnsT9sPtuur3YUv6EQBe',
            mobile: '649-408-5360',
            profileImage:
                'https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
            licenceNumber: '496894048-3',
            thainationalId: 1345258965329,
            coverImage:
                'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            lineId: 'Car',
            gender: 1,
            birthDate: '1987-05-25',
        },
        {
            id: 11,
            firstName: 'Naeramit',
            lastName: 'Sodory',
            profileName: 'Naeramit',
            email: 'naeramit.18@gmail.com',
            password:
                '$2a$10$RiK0keiI63OCRsdFgvHcxuEh8HcpYHWznCnsT9sPtuur3YUv6EQBe',
            mobile: '649-408-5360',
            profileImage:
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
            licenceNumber: '496894048-7',
            thainationalId: 1345258965329,
            coverImage:
                'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            lineId: 'Car2',
            gender: 1,
            birthDate: '1987-05-25',
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
            description: 'A clinic in Uthai Thani \n#minimal ',
            profileImage:
                'https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?w=2000',
            coverImage: 'https://study.com/cimages/videopreview/7hfyoyse54.jpg',
            address: '777 ม.7 ต.น้ำซึม อ.เมือง จ.อุทัยธานี',
            provinceId: null,
            googleMap: 'https://goo.gl/maps/nkSAbhnh6mArW8tG6',
            mobile: '0895674332',
            lineId: 'Naeramit',
            Province: null,
            follower: 0,
        },
        {
            id: 2,
            email: 'hospotal@gmail.com',
            password:
                '$2a$10$RiK0keiI63OCRsdFgvHcxuEh8HcpYHWznCnsT9sPtuur3YUv6EQBe',
            providerName: 'Naeramit Hospital',
            description: 'A Hospital in Thailand \n#minimal ',
            profileImage:
                'https://media.istockphoto.com/id/1344779917/vector/medical-center-hospital-building-vector-design.jpg?s=612x612&w=0&k=20&c=_sZByueZhEZbK2WjQz1jqXy1_Rr5jYkgiVBj-2ls44s=',
            coverImage:
                'https://www.wfyi.org/files/wfyi/articles/original/pexels-pixabay-263402.jpg',
            address: '762 ม.8 ต.น้ำซึม อ.เมือง จ.อุทัยธานี',
            provinceId: null,
            googleMap: 'https://goo.gl/maps/RjpyR5uvw26nTzAF9',
            mobile: '08956743223',
            lineId: 'Naeramit123',
            Province: null,
            follower: 0,
        },
    ])

    await JobPost.bulkCreate([
        {
            id: 1, ///////
            title: 'ต้องการหมอ 1 คน',
            location: 'กรุงเทพ พญาไท',
            map: 'https://goo.gl/maps/mjW9k2hbVEWSvQj28',
            line: '@naeramithoss',
            phone: '0817518953',
            provinceId: '2',
            jobType: 'FullTime',
            stage: 1,
            providerId: 1,
            createdAt: '2023-07-10 08:00:00',
            updatedAt: '2023-07-10 08:00:00',
        },
        {
            id: 2, ///////
            title: 'ต้องการหมอ 2 คน',
            location: 'กรุงเทพ  ดินแดง',
            map: 'https://goo.gl/maps/yEkvvCJeyGTstZF79',
            line: '@naeramitHospital',
            phone: '0817518953',
            provinceId: '2',
            jobType: 'FullTime',
            stage: 1,
            providerId: 1,
            createdAt: '2023-07-10 08:00:00',
            updatedAt: '2023-07-10 08:00:00',
        },
        {
            id: 3, //////
            title: 'รับสมัครแพทย์ PT ด่วน!!!!!!!!!',
            location: 'สมุทรปราการ  บางพลี',
            map: 'https://goo.gl/maps/mjW9k2hbVEWSvQj28',
            line: '@ascuw1',
            phone: '0817518953',
            provinceId: '1',
            jobType: 'PartTime',
            stage: 1,
            providerId: 1,
            createdAt: '2023-07-10 08:00:00',
            updatedAt: '2023-07-10 08:00:00',
        },
        {
            id: 4, ///////
            title: 'โรงพยาบาลไทยนครินทร์จำกัด(มหาชน)รับสมัครแพทย์ด่วน',
            location: 'สมุทรปราการ  บางพลี',
            map: 'https://goo.gl/maps/mjW9k2hbVEWSvQj28',
            line: '@naeramitHospital',
            phone: '023406499',
            provinceId: '1',
            jobType: 'FullTime',
            stage: 1,
            providerId: 1,
            createdAt: '2023-07-10 08:00:00',
            updatedAt: '2023-07-10 08:00:00',
        },
        {
            id: 5, //////
            title: 'รับสมัครแพทย์ Part time  1 ตำแหน่ง',
            location: 'สมุทรปราการ  บางพลี',
            map: 'https://goo.gl/maps/mjW9k2hbVEWSvQj28',
            line: '@onemeoneyou',
            phone: '0911468044',
            provinceId: '1',
            jobType: 'PartTime',
            stage: 1,
            providerId: 1,
            createdAt: '2023-07-10 08:00:00',
            updatedAt: '2023-07-10 08:00:00',
        },
        {
            id: 6, /////
            title: 'รพ.เกษมราษฎร์ประชาชื่น รับ Part Time เวรใน Cardio ด่วน',
            location: 'กรุงเทพมหานคร ประชาชื่น',
            map: 'https://goo.gl/maps/mjW9k2hbVEWSvQj28',
            line: '@swfcs1',
            phone: '0818808105',
            provinceId: '1',
            jobType: 'PartTime',
            stage: 1,
            providerId: 1,
            createdAt: '2023-07-10 08:00:00',
            updatedAt: '2023-07-10 08:00:00',
        },
        {
            id: 7, //////
            title: 'ด่วน! รับสมัครแพทย์ GP PART TIME',
            location: 'กรุงเทพ  ปทุมวัน',
            map: 'https://goo.gl/maps/mjW9k2hbVEWSvQj28',
            line: '@nuc',
            phone: '0877639747',
            provinceId: '2',
            jobType: 'PartTime',
            stage: 1,
            providerId: 1,
            createdAt: '2023-07-13 08:00:00',
            updatedAt: '2023-07-13 08:00:00',
        },
        {
            id: 8, //////
            title: 'โรงพยาบาลนวเวช (ถ.รัชดา-รามอินทรา) รับสมัครแพทย์ FT',
            location: 'กรุงเทพ  ถ.รัชดา-รามอินทรา',
            map: 'https://goo.gl/maps/mjW9k2hbVEWSvQj28',
            line: '@sukumtsu',
            phone: '0817518953',
            provinceId: '2',
            jobType: 'FullTime',
            stage: 1,
            providerId: 1,
            createdAt: '2023-07-13 08:00:00',
            updatedAt: '2023-07-13 08:00:00',
        },
        {
            id: 9, ///////
            title: 'รับสมัครแพทย์ GP Fulltime ด้าน Telehealth',
            location: 'กรุงเทพมหานคร บางรัก',
            map: 'https://goo.gl/maps/8K3zAmQWjiQkGesV8',
            line: '@bangrak12',
            jobType: 'FullTime',
            phone: '0891234567',
            stage: 1,
            providerId: 1,
            provinceId: '2',
            createdAt: '2023-07-13 08:00:00',
            updatedAt: '2023-07-13 08:00:00',
        },
        {
            id: 10, //////
            title: 'ด่วน !! รับแพทย์ PT',
            location: 'เชียงใหม่ หางดง',
            map: 'https://goo.gl/maps/y1H1yq5omJAueE5n8',
            line: '@koyrewa',
            jobType: 'PartTime',
            phone: '0958895793',
            stage: 2,
            providerId: 2,
            provinceId: '4',
        },
        {
            id: 11, /////
            title: 'รับสมัครแพทย์ GP Full-time 1 อัตรา อินทัชเมดิแคร์',
            location: 'ปทุมธานี',
            map: 'https://goo.gl/maps/yEkvvCJeyGTstZF79',
            line: '@swrvs45',
            jobType: 'FullTime',
            phone: '0812345678',
            stage: 1,
            providerId: 1,
            provinceId: '3',
        },
        {
            id: 12, //////
            title: 'ด่วน แพทย์ขึ้นเวร',
            location: 'ชลบุรี บางแสน',
            map: 'https://goo.gl/maps/7UxPTGqQXtCXhazJ8',
            line: '@Pizz27',
            jobType: 'PartTime',
            phone: '0869005210',
            stage: 1,
            providerId: 2,
            provinceId: '5',
        },
        {
            id: 13, //////
            title: 'รับสมัครแพทย์ตรวจ GP (กทม.) ด่วน',
            location: 'กรุงเทพมหานคร สายไหม',
            map: 'https://goo.gl/maps/aGJf2DsBLEa9vVS3A',
            line: '@scnwyq',
            jobType: 'FullTime',
            phone: '0865432198',
            stage: 2,
            providerId: 2,
            provinceId: '2',
        },
        {
            id: 14, ////
            title: '** ด่วนจี้เลยพี่จ๋า รพ.วิชัยเวชฯอ้อมน้อย **',
            location: 'สมุทรสาคร',
            map: 'https://goo.gl/maps/7UxPTGqQXtCXhazJ8',
            line: '@iurcn4dv',
            jobType: 'PartTime',
            phone: '0871982213',
            stage: 1,
            providerId: 1,
            provinceId: '10',
        },
        {
            id: 15, //////
            title: 'ต้องการหมอ 1 คน',
            location: 'ภูเก็ต',
            map: 'https://goo.gl/maps/7UxPTGqQXtCXhazJ8',
            line: '@phuket77',
            jobType: 'FullTime',
            phone: '0832190876',
            stage: 1,
            providerId: 2,
            provinceId: '6',
        },
        {
            id: 16, ////
            title: 'รับแพทย์สูติ',
            location: 'ฉะเชิงเทรา',
            map: 'https://goo.gl/maps/7pvL4feRUR1MzPBo8',
            line: '@dcb987',
            jobType: 'PartTime',
            phone: '0892444325',
            stage: 1,
            providerId: 1,
            provinceId: '11',
        },
        {
            id: 17, ////
            title: 'ต้องการหมอ 1 คน',
            location: 'นนทบุรี',
            map: 'https://goo.gl/maps/KwcW9dCWyvP85oiv9',
            line: '@nonth09',
            jobType: 'FullTime',
            phone: '0821098765',
            stage: 2,
            providerId: 2,
            provinceId: '12',
        },
        {
            id: 18, //////
            title: 'ต้องการแพทย์P/T ขึ้นเวรคลินิก อ.ปลวกแดง จ.ระยอง',
            location: 'ระยอง',
            map: 'https://goo.gl/maps/XoGaqPEXxZUX2WUPA',
            line: '@non692',
            jobType: 'PartTime',
            phone: '0949549075',
            stage: 1,
            providerId: 1,
            provinceId: '7',
        },
        {
            id: 19, /////
            title: '+++ร.พ.อยุธยา รับสมัครแพทย์ใหม่+++ ',
            location: 'อยุธยา',
            map: 'https://goo.gl/maps/KwcW9dCWyvP85oiv9',
            line: '@charrt3',
            jobType: 'FullTime',
            phone: '0898360421',
            stage: 1,
            providerId: 1,
            provinceId: '11',
        },
        {
            id: 20, ////
            title: 'รับสมัครแพทย์ประจำห้องพยาบาล จ.ขอนแก่น',
            location: 'ขอนแก่น',
            map: 'https://goo.gl/maps/uqN9SLkL3HgSqFcN7',
            line: '@kk872d',
            jobType: 'FullTime',
            phone: '0922652856',
            stage: 1,
            providerId: 2,
            provinceId: '8',
        },
        {
            id: 21, //////
            title: 'ด่วน แพทย์ดำเนินการคลินิก เวอร์ซาส คลินิกเวชกรรม ขอนแก่น',
            location: 'ขอนแก่น',
            map: 'https://goo.gl/maps/Qqza9McoPdHQn2VW8',
            line: '@on.on16',
            jobType: 'PartTime',
            phone: '0902124613',
            stage: 1,
            providerId: 2,
            provinceId: '8',
        },
        {
            id: 22, ////
            title: '**รับสมัครแพทย์ Fulltime รพ.เซ็นทรัลเขียงใหม่ เมโมเรียล จ.เชียงใหม่',
            location: 'เชียงใหม่',
            map: 'https://goo.gl/maps/uqN9SLkL3HgSqFcN7',
            line: '0882911750',
            jobType: 'FullTime',
            phone: '0830613006',
            stage: 1,
            providerId: 1,
            provinceId: '4',
        },
        {
            id: 23, ////
            title: '*** รพ.วิชัยวชฯอ้อมน้อย รับ GP การันตี 120-130K*** ',
            location: 'สมุทรสาคร',
            map: 'https://goo.gl/maps/Qqza9McoPdHQn2VW8',
            line: '0871982213',
            jobType: 'FullTime',
            phone: '0871982213',
            stage: 1,
            providerId: 1,
            provinceId: '10',
        },
    ])

    await FullTime.bulkCreate([
        {
            id: 1, /////
            jobDes: 'รายละเอียดงาน ทำงานคลินิกทั่วไป ตรวจนักท่องเที่ยวต่างชาติ คุณสมบัติผู้สมัคร • จบแพทย์สาสตร์บัณฑิต • มีใบประกอบโรคศิลป์',
            workingDay: 'จันทร์-ศุกร์',
            startDate: '2023-09-01',
            salary: '80000',
            annual: '10',
            benefit: 'ประกันสังคม',
            other: 'ไม่มี',
            jobPostId: 15,
        },
        {
            id: 2, /////
            jobDes: 'ประกาศรับสมัครแพทย์ GP fulltime ประจำคลินิกเวชกรรม \n- Rate 150,000-250,000 ++ บาท/เดือน รวมค่าใบประกอบวิชาชีพ **ไม่หักที่จ่าย** \n- ทำงาน 20-25 วัน/เดือน เวลา 09.00-21.00 น. \n- มีค่า DF ค่าหัตถการ, Hotel call, etc \n- มีค่า OT ชั่วโมงละ 500 บาท  \n- งานตรวจคนไข้โรคทั่วไป + trauma เล็กน้อย- สามารถสื่อสารภาษาอังกฤษกับชาวต่างชาติได้ดี \n- เหมาะสำหรับน้องๆที่อยากฝึกภาษา พัฒนาประสบการณ์ในการตรวจคนไข้ และหาประสบการณ์ใหม่ๆ',
            workingDay: 'จันทร์-ศุกร์',
            startDate: '2023-08-26',
            salary: '150000',
            annual: '10',
            benefit: '- มี ที่พัก \n- ประกันสังคม',
            other: 'ไม่มี',
            jobPostId: 2,
        },
        {
            id: 3, //////
            jobDes: 'โรงพยาบาลพญาไท 3 รับสมัครแพทย์ Neuromed Full Time \nสามารถมาดู Case เร่งด่วน นอกเวลาได้ (โดยเฉพาะ Acute Stroke ที่ต้องให้ rtpa)\nถ้าสนใจ dementia จะพิจารณาเป็นพิเศษ\nติดต่อ สำนักงานแพทย์ โรงพยาบาลพญาไท 3 ชั้น 5(ใกล้สถานี BTS บางหว้า หรือ MRT บางไผ่)\nจันทร์-ศุกร์ เวลา 9.00-17.00 น.',
            workingDay: 'จันทร์-ศุกร์',
            startDate: '2023-08-23',
            salary: '200000',
            annual: '10',
            benefit: 'ประกันสังคม',
            other: 'ไม่มี',
            jobPostId: 1,
        },
        {
            id: 4, //////
            jobDes: 'โรงพยาบาลนวเวช (ถ.รัชดา-รามอินทรา)\nต้องการรับสมัครแพทย์ Full Time\nสาขาอายุรกรรมทั่วไป Gen Med\nสาขาโรคระบบทางเดินอาหาร GI\nปฏิบัติงาน : 45 ชม./สัปดาห์\nค่าตอบแทน : การันตีรายเดือน (ตามข้อตกลง)',
            workingDay: 'จันทร์-ศุกร์',
            startDate: '2023-08-23',
            salary: '200000',
            annual: '10',
            benefit: 'อาหาร, ค่ารักษาพยาบาล, สิทธิการลา',
            other: 'ไม่มี',
            jobPostId: 8,
        },
        {
            id: 5, ///////
            jobDes: 'โรงพยาบาลไทยนครินทร์จำกัด(มหาชน) 345 ถ.เทพรัตน(บางนา-ตราด กม.3.5 ใกล้เซนทรัลบางนา) แขวงบางนาเหนือ เขตบางนา กรุงเทพฯ 10260  \nรับสมัครแพทย์ดังนี้\n1. แพทย์เวชปฏิบัติทั่วไปประจำสหคลินิก(บ้านโพธิ์-ฉะเชิงเทรา)  \nจำนวน 2 อัตรา มีการันตี (เริ่มงาน กย.66)\n2. กุมารแพทย์ประจำสาขาทารกแรกเกิด มีการันตี \nติดต่อสอบถามสำนักอำนวยการแพทย์  \nโทร 023406499 ต่อ 3311  หรือส่งเอกสารประวัติการศึกษา/การทำงาน  ที่  Email doctor@thainakarin.co.th',
            workingDay: 'จันทร์-ศุกร์',
            startDate: '2023-08-23',
            salary: '200000',
            annual: '10',
            benefit: 'ค่ารักษาพยาบาล, สิทธิการลา',
            other: 'ไม่มี',
            jobPostId: 4,
        },
        {
            id: 6, ///////
            jobDes: 'รับสมัครแพทย์สนใจร่วมงาน บริษัท เทเลเฮลท์ แคร์ จำกัด/nคุณสมบัติ/n- ได้รับคุณวุฒิแพทยศาสตรบัณฑิต\n- มีใบประกอบวิชาชีพเวชกรรม- มีความสนใจด้าน Telehealth- แพทย์ GP มีประสบการณ์ 3 ปี ขึ้นไป/nข้อมูลการทำงาน- ให้คำปรึกษาคำแนะนำตรวจรักษาเบื้องต้นกำหนดระดับการดูแลที่เหมาะสมตามหลักวิชาชีพ-ทำงานร่วมกับทีมสหวิชาชีพมีส่วนร่วมในการพัฒนาด้านการดูแลรักษาแนวทางปฏิบัติ และการแพทย์/nเวลาปปฏิบัติงาน- แพทย์ Full time ทำงาน 5 วัน / สัปดาห์ /nค่าตอบแทน120,000++ ตามประสบการณ์และความสามารถ',
            workingDay: 'จันทร์-ศุกร์',
            startDate: '2023-08-23',
            salary: '120000',
            annual: '10',
            benefit:
                '- วันหยุดพักผ่อนประจำปี- ประกันสุขภาพ ประกันชีวิต- ประกันสังคม- กองทุนสำรองเลี้ยงชีพ- ตรวจสุขภาพประจำปี',
            other: 'ไม่มี',
            jobPostId: 9,
        },
        {
            id: 7, ///////
            jobDes: 'อินทัชเมดิแคร์คลินิกเวชกรรม สาขาเจริญกรุงรับสมัครแพทย์ GP Full-time 1 อัตรา/nคุณสมบัติ-ไม่จำกัดเพศ อายุไม่เกิน 45 ปี-มีใบประกอบวิชาชีพเวชกรรม-มีบุคลิกภาพ และมนุษยสัมพันธ์ที่ดี/nข้อมูลการทำงาน-แพทย์ Full time ทำงาน ทุกวันจันทร์-ศุกร์-ปฏิบัติงานเวลา 08.00-19.00 น.-ตรวจรักษา ประเมิน วิเคราะห์ ทำหัตถการ ',
            workingDay: 'จันทร์-ศุกร์',
            startDate: '2023-08-01',
            salary: '120000',
            annual: '10',
            benefit:
                '- วันหยุดพักผ่อนประจำปี- ประกันสุขภาพ ประกันชีวิต- ประกันสังคม- กองทุนสำรองเลี้ยงชีพ- ตรวจสุขภาพประจำปี',
            other: 'ไม่มี',
            jobPostId: 11,
        },
        {
            id: 8, ////
            jobDes: 'โรงพยาบาลภูมิพลอดุลยเดช เขตสายไหม กทม. ***ด่วน**** \nรับสมัครแพทย์ตรวจโรคทั่วไป (ผู้ป่วยนอก)(อายุไม่เกิน 55 ปี)/nปฏิบัติงาน เสาร์ เวลา 08.00-20.00น. จำนวน 1ตำแหน่ง\nอาทิตย์ เวลา 08.00-20.00น. จำนวน 1 ตำแหน่ง\nอาทิตย์ เวลา 12.00-20.00น. จำนวน 1 ตำแหน่ง\n(วันเวลาการปฏิบัติงานอาจเปลี่ยนแปลงได้ตามภาระงาน)สัญญาจ้างปีต่อปี (ตามปีงบประมาณ)อัตราค่าตอบแทน 500ชม.\nเริ่มงานโดยประมาณ กรกฎาคม 2566หรือตามแต่ตกลง',
            workingDay: 'จันทร์-ศุกร์',
            startDate: '2023-08-01',
            salary: '120000',
            annual: '10',
            benefit:
                '- วันหยุดพักผ่อนประจำปี- ประกันสุขภาพ ประกันชีวิต- ประกันสังคม- กองทุนสำรองเลี้ยงชีพ- ตรวจสุขภาพประจำปี',
            other: 'ไม่มี',
            jobPostId: 13,
        },
        {
            id: 9, /////
            jobDes: 'รับสมัครแพทย์ผู้ดำเนินการเปิด เวลา 10:00-19:00 น.หรือนอกเวลาได้เสาร์อาทิตย์เต็มวัน/nคลินิกเน้นหัตถการ ความงาม  - ไม่มีศัลยกรรม  - หัตถการ skin ทั่วไป ร้อยไหม โบท็อกซ์  ฟิลเลอร์ ทรีทเม้นท์ต่างๆ  - ใช้ยา อย.ทุกตัว  - คลินิกเน้นเรื่องความปลอดภัยเปิดมา9ปีแล้วมาตรฐาน นัดเข้ามาดูคลินิกก่อนได้สามารถเริ่มแขวนได้ทันทีรายได้แขวนวันละ2ชั่วโมง เสาร์อาทิตย์เต้มวันคิด17000.-. 20000.-เต็มวันอังคารถึงอาทิตย์ 25000.-ถึง30000.-',
            workingDay: 'จันทร์-ศุกร์',
            startDate: '2023-08-01',
            salary: '150000',
            annual: '10',
            benefit:
                '- วันหยุดพักผ่อนประจำปี- ประกันสุขภาพ ประกันชีวิต- ประกันสังคม- กองทุนสำรองเลี้ยงชีพ- ตรวจสุขภาพประจำปี',
            other: 'ไม่มี',
            jobPostId: 17,
        },
        {
            id: 10, /////
            jobDes: 'โรงพยาบาลอยุธยา มีความประสงค์รับสมัครแพทย์ Full Time ดังนี้\n1. อายุรแพทย์ทั่วไป       จำนวน  1  อัตรา\n2. อายุรแพทย์โรคไต     จำนวน  1  อัตรา\n3. อายุรแพทย์โรคติดเชื้อ     จำนวน  1  อัตรา\n4. อายุรแพทย์โรคระบบการหายใจ   จำนวน  1  อัตรา\n5. อายุรกรรมเวชบำบัดวิกฤต         จำนวน  1  อัตรา\n6. ศัลยแพทย์ทั่วไป     จำนวน  1  อัตรา\n7. กุมารแพทย์ (เวชศาสตร์ทารกแรกเกิดและปริกำเนิด) จำนวน  1  อัตรา\n8. กุมารแพทย์ (เชี่ยวชาญโรคระบบทางเดินหายใจในเด็ก) จำนวน  1  อัตรา\nสนใจสมัครด้วยตนเอง หรือส่งใบสมัครได้ที่\nโทร : (032) 322 274 - 80 ต่อ 451  / 089-836-0421  (คุณสาคร  ฤทธิ์คุมพล)\nหรือส่ง CV มาที่ E-Mail : bmr.ma@bdms.co.th  ',
            workingDay: 'จันทร์-ศุกร์',
            startDate: '2023-08-01',
            salary: '150000',
            annual: '10',
            benefit:
                '- วันหยุดพักผ่อนประจำปี- ประกันสุขภาพ ประกันชีวิต- ประกันสังคม- กองทุนสำรองเลี้ยงชีพ- ตรวจสุขภาพประจำปี',
            other: 'ไม่มี',
            jobPostId: 19,
        },
        {
            id: 11, ///
            jobDes: 'ด่วน...ต้องการแพทย์ประจำห้องพยาบาล \nพิกัด  ตำบลในเมือง  จ.ขอนแก่น  \nเวลาปฎิบัติงาน  \nทุกวันอังคารและวันพฤหัส  \nเวลา 09.00-15.00 น.    \nเริ่ม วันที่ 4 กรกฎาคม 2566\nสนใจติดต่อ  092-2652856 ก้อย',
            workingDay: 'จันทร์-ศุกร์',
            startDate: '2023-09-04',
            salary: '150000',
            annual: '10',
            benefit:
                '- วันหยุดพักผ่อนประจำปี- ประกันสุขภาพ ประกันชีวิต- ประกันสังคม- กองทุนสำรองเลี้ยงชีพ- ตรวจสุขภาพประจำปี',
            other: 'ไม่มี',
            jobPostId: 20,
        },
        {
            id: 12, /////
            jobDes: 'โรงพยาบาลเซ็นทรัลเชียงใหม่ เมโมเรียล เป็นโรงพยาบาลเอกชนขนาด 120 เตียง ได้รับการรับรองระบบคุณภาพ ISO 9002:2008 จาก UKAS และมาตรฐานโรงพยาบาล (Hospital Accreditation : HA) บันไดขั้นที่ 2 จากสถาบันรับรองคุณภาพสถานพยาบาล (องค์การมหาชน) ขณะนี้ โรงพยาบาลกำลังเปิดรับสมัครแพทย์ Full time  ดังนี้\n1.แพทย์สูตินารีเวช\n2.กุมารแพทย์\n3.ศัลยแพทย์\nข้อมูลการทำงาน\n- ให้คำปรึกษา คำแนะนำ ตรวจรักษา หัตถการ กำหนดระดับการดูแลที่เหมาะสมตามหลักวิชาชีพ  \n- ทำงานร่วมกับทีมสหวิชาชีพ มีส่วนร่วมในการพัฒนาด้านการดูแลรักษาแนวทางปฏิบัติ และการแพทย์  \nเวลาปปฏิบัติงาน\n- แพทย์ Full time ทำงาน 5 วัน / สัปดาห์  \nท่านใดที่สนใจสมัครงานในตำแหน่งดังกล่าว สามารถยื่นใบสมัครพร้อมหลักฐานด้วยตนเอง ที่สำนักงานฝ่ายทรัพยากรมนุษย์ ชั้น 2 โรงพยาบาลเซ็นทรัลเชียงใหม่ เมโมเรียล ทุกวันจันทร์-วันเสาร์ เวลา 9.00 -15.00    \nสอบถามข้อมูลเพิ่มเติมได้ที่ฝ่ายทรัพยากรมนุษย์ โทรศัพท์ 053-819333-40 ต่อ 213 มือถือ 0830613006    line ID 0882911750  e-mail hr@centralchiangmaihospital.com',
            workingDay: 'จันทร์-ศุกร์',
            startDate: '2023-09-02',
            salary: '150000',
            annual: '10',
            benefit:
                '- วันหยุดพักผ่อนประจำปี- ประกันสุขภาพ ประกันชีวิต- ประกันสังคม- กองทุนสำรองเลี้ยงชีพ- ตรวจสุขภาพประจำปี',
            other: 'ไม่มี',
            jobPostId: 22,
        },
        {
            id: 13, ////
            jobDes: 'ด่วน  \nรพ. วิชัยเวชฯ อ้อมน้อย  \nตั้งอยู่ใกล้หนองแขม ถ.พุทธมณฑลสาย 5 ต.อ้อมน้อย อ.กระทุ่มแบน จ.สมุทรสาคร\nรับสมัคร GP full time เริ่มงานเดือน สค 2 คน นี้\nทำงาน 5 วัน OPD วันจันทร์-วันศุกร์ หยุด วันเสาร์และวันอาทิตย์ 1 ตำแหน่ง\nหรือทำงาน OPD/ER ทำงาน 4 วัน หยุด 3 วัน 1 ตำแหน่ง\nสนใจติดต่อ โทร/add line  \n0871982213 (เลขาแพทย์)',
            workingDay: 'จันทร์-ศุกร์',
            startDate: '2023-09-15',
            salary: '120000',
            annual: '10',
            benefit:
                '- วันหยุดพักผ่อนประจำปี- ประกันสุขภาพ ประกันชีวิต- ประกันสังคม- กองทุนสำรองเลี้ยงชีพ- ตรวจสุขภาพประจำปี',
            other: 'ไม่มี',
            jobPostId: 23,
        },
    ])

    await PartTime.bulkCreate([
        {
            id: 1, //////
            jobDes: 'ต้องการรับสมัครแพทย์ Part Time\nสาขา อายุรกรรมโรคหัวใจ Cardio\nวัน-เวลาปฏิบัติงาน :ทุกวันจันทร์ เวลา 8.00-14.00 น.ทุกวันศุกร์ เวลา 17.00-20.00 น. ค่าตอบแทน : การันตีรายชั่วโมง 1,000 บาท',
            startDate: '2023-08-24 08:00:00',
            endDate: '2023-08-28 17:00:00',
            wage: '6000',
            other: 'ไม่มี',
            jobPostId: 3,
        },
        {
            id: 2, //////
            jobDes: 'รับสมัครแพทย์ Part time \nมีประสบการณ์  Botox,Filler,ร้อยไหม,หัตถการฉีดอื่นๆ 1 ปี ขึ้นไป\n-มีใบประกอบวิชาชีพเวชกรรม \n-รายได้ตามตกลง ( ตามประสบการณ์)  \n-สามารถปฏิบัติงานได้  3-4 วัน/สัปดาห์  \nแพทย์ท่านใดมีความประสงค์ร่วมงาน ต้องการรายละเอียดเพิ่มเติมกรุณาติดต่อ แอดไลน์  ID line : onemeoneyou ( คุณยุ) หรือโทร 091-1468044 ขอบคุณค่ะ',
            startDate: '2023-08-25 08:00:00',
            endDate: '2023-08-28 17:00:00',
            wage: '36000',
            other: 'ไม่มี',
            jobPostId: 5,
        },
        {
            id: 3, /////
            jobDes: '- รับแพทย์ Cardio เวรใน ช่วงเวลา 20.00-06.00 น. \nการันตี 750 บาทต่อชั่วโมง \nสนใจติดต่อ เลขาแพทย์ดาว\nโทร. 02-910-1600 ต่อ 1505\n{081-8808105}\nID Line : https://line.me/ti/p/LNjnUTx4_k',
            startDate: '2023-08-03 20:00:00',
            endDate: '2023-08-04 06:00:00',
            wage: '7500',
            other: 'ไม่มี',
            jobPostId: 6,
        },
        {
            id: 4, /////
            jobDes: 'รับสมัครแพทย์ GP PART TIME ปฏิบัติงาน วันที่ 16, 22 กรกฎาคม 2566  \nรายละเอียดการปฏิบัติงาน\n- ปฏิบัติงานเวลา 08.00-20.00 น.  และ 20.00-08.00 น.\n- มีช่วงพักเบรค\n- ตรวจ OPD, ER สลับกับแพทย์อยู่เวรอีกท่าน\n- ค่าตอบแทน 1500 บาท/ชั่วโมง\n- เงินจะโอนเข้าบัญชี ทุกวันที่ 10 ของเดือนถัดไป\n- สวัสดิการ :  อาหาร และห้องพักแพทย์เวรในโรงพยาบาล \nสนใจติดต่อสอบถามเพิ่ม  \n087-763-9747 คุณพิม เลขาแพทย์\n083-032-6032 พญ.สุพรรณิการ์ (หมอเดียร์) รอง ผอ.แพทย์',
            startDate: '2023-09-16 08:00:00',
            endDate: '2023-09-22 20:00:00',
            wage: '36000',
            other: 'ไม่มี',
            jobPostId: 7,
        },
        {
            id: 5, //////
            jobDes: 'ด่วน !!\nรับแพทย์ PT วันที่ 4 11  12  18 25 กรกฎาคมคม  2566\nเวลา 09.00-17.00 น.\nโอนเงิน หลังลงเวร\nโทร 095-8895793  \nไลน์ ID : koyrewa',
            startDate: '2023-09-04 09:00:00',
            endDate: '2023-09-25 17:00:00',
            wage: '40000',
            other: 'ไม่มี',
            jobPostId: 10,
        },
        {
            id: 6, //////
            jobDes: 'รับสมัครแพทย์ PT \nวันที่8/7/2566\nเวลา 09.00 น. -12.00 น.\nค่าเวร 1500  \nหัก3%\nจ่ายสดหลังลงเวรค่ะ \nเอกสาร\n     -สำเนาบัตรประชาชน\n     -สำเนาใบประกอบวิชาชีพ\nสนใจติดต่อ  \nLine ID : Pizz27\nTel:086-900-5210',
            startDate: '2023-09-08 09:00:00',
            endDate: '2023-09-08 12:00:00',
            wage: '1500',
            other: 'ไม่มี',
            jobPostId: 12,
        },
        {
            id: 7, /////
            jobDes: 'รับสมัครแพทย์ PT สหคลินิกสยามการแพทย์  อ.ปลวกแดง จ.ระยอง\nวันที่ 5,7,12,14,19,21,25 กรกฎาคม2566\n09.00 น. - 16.30 น.\nค่าเวร 3,500 บาท\nจ่ายสดหลังลงเวรค่ะ\nสนใจติดต่อ  \nLine ID : non692 \nTel:0949549075',
            startDate: '2023-09-05 09:00:00',
            endDate: '2023-09-25 16:30:00',
            wage: '24500',
            other: 'ไม่มี',
            jobPostId: 18,
        },
        {
            id: 8, //////
            jobDes: 'รพ. วิชัยเวชฯ อ้อมน้อย  \nรับแพทย์ GP ออกตรวจ GP \nวันพุธที่ 5/7/66    \nเวลา 07.30 - 17.30 น.\nค่าตอบแทน  500/ชม.  ไม่หักเวลาพัก  \nมีมื้อเที่ยง +ห้องพักแพทย์ฟรี\nสนใจติดต่อ  0871982213  ',
            startDate: '2023-09-05 07:30:00',
            endDate: '2023-09-05 17:30:00',
            wage: '5000',
            other: 'ไม่มี',
            jobPostId: 14,
        },
        {
            id: 9, /////
            jobDes: 'คลินิกมิตรภาพ บางวัว ฉะเชิงเทรา \n- แพทย์สูติ 1 อัตรา ค่าตอบแทน 800 บาท/ชั่วโมง  \nตกลงเวลาทำงานได้ สัปดาห์ละ 1-2 วัน\nเวลาทำงาน 16.30-19.30น. หรือตามแต่ตกลง  \nสนใจติดต่อ 089-244-4325',
            startDate: '2023-09-05 16:30:00',
            endDate: '2023-09-05 19:30:00',
            wage: '4800',
            other: 'ไม่มี',
            jobPostId: 16,
        },
        {
            id: 10, /////
            jobDes: 'เวอร์ซาส คลินิก ขอนแก่น\nรับแพทย์ดำเนินการคลินิก\nแพทย์ติดเวลาราชการสามารถสอบถามได้นะคะ\nสกินอย่างเดียว\n800 /ชม df 7%\nสนใจสอบถาม\nโทร 0902124613\nLineID  on.on16 (โอเอ็นจุดโอเอ็น16)\nK.on',
            startDate: '2023-09-24 10:30:00',
            endDate: '2023-09-24 20:30:00',
            wage: '8000',
            other: 'ไม่มี',
            jobPostId: 21,
        },
    ])

    await DoctorJob.bulkCreate([
        { id: 1, status: 3, jobPostId: 1, doctorId: 1 },
        { id: 2, status: 1, jobPostId: 2, doctorId: 1 },
        { id: 3, status: 1, jobPostId: 1, doctorId: 2 },
        { id: 4, status: 1, jobPostId: 2, doctorId: 2 },
    ])

    await Follow.bulkCreate([
        { id: 1, status: 1, doctorId: 1, providerId: 1 },
        { id: 2, status: 1, doctorId: 2, providerId: 1 },
        { id: 3, status: 1, doctorId: 3, providerId: 1 },
        { id: 4, status: 1, doctorId: 3, providerId: 2 },
        { id: 5, status: 1, doctorId: 4, providerId: 2 },
        { id: 6, status: 1, doctorId: 11, providerId: 1 },
    ])

    process.exit()
}
main()
