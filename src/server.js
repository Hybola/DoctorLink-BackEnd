const { Server } = require('socket.io')
const server = require('./app')
// const { config } = require('dotenv')

const io = new Server(server, {
    cors: {
        origin: '*',
    },
})

////========= Chee's Code
const onlineProviders = {}
const onlineDoctors = {}
const chatRooms = {} //Key is room id, value is array of {conversation}

io.use((socket, next) => {
    socket.userId = socket.handshake.auth.user.id
    socket.role = socket.handshake.auth.role

    socket.user = socket.handshake.auth.user
    // console.log(socket.handshake.auth)
    if (socket.user.role == 'doctor') {
        const doctorId = socket.user.id
        onlineDoctors[doctorId] = socket.id
    } else if (socket.user.role == 'provider') {
        const providerId = socket.user.id
        onlineProviders[providerId] = socket.id
    }
    console.log('ONLINE providers:', onlineProviders)
    console.log('ONLINE doctors:', onlineDoctors)
    next()
})

io.on('connection', (socket) => {
    socket.on('startChat', (data) => {
        const newRoom = `${data.doctor.id}:${data.providerId}`
        socket.join(newRoom)

        // console.log('newRoom ====>>', newRoom)
        // console.log('onlineProviders===>>>', onlineProviders)//{ '1': 'nmmHycRn4JzElAXcAAAL' }
        // console.log('onlineDoctors===>>>', onlineDoctors)// { '1': '6OBIqs1bCraSogTmAAAN' }
        // console.log('data.doctor >>>>', data.doctor) //{profileName,firstName, lastName,description, profileImage,...}
        socket
            .to(onlineProviders[data.providerId])
            .emit('acceptChat', { newRoom, doctor: data.doctor })
    })
    socket.on('providerJoinRoom', (newRoom) => {
        // console.log("providerJoinRoom===>",newRoom)// run as 1:1
        socket.join(newRoom)
    })

    socket.on('doctorSendMessage', (data) => {
        // const Room = `${data.doctorId}:${data.providerId}`
        // const conversation = {
        //     message: data.input,
        //     to: 'provider',
        //     from: 'doctor',
        // }
        // console.log('Doctor sendsconversation===>>>', data.conversation) //{ message: "i'm a doctor", to: 'provider', from: 'doctor' }
        // console.log('room===>>>', data.room) // 1:1
        if (chatRooms[data.room]?.length )
         chatRooms[data.room] = [...chatRooms[data.room], data.conversation]
        else chatRooms[data.room] = [data.conversation]

        // console.log('ChatRooms[data.room] >>>', chatRooms[data.room])

        socket.to(data.room).emit('providerGetMessage', {
            conversation: data.conversation,
            room: data.room,
        })
    })

    socket.on('providerSendMessage', (data) => {
        // console.log('providerSendMessage to room:', data.room)
        // console.log('with Conversation:', data.conversation)
        if (chatRooms[data.room]?.length )
        chatRooms[data.room] = [...chatRooms[data.room], data.conversation]
       else chatRooms[data.room] = [data.conversation]

        socket
            .to(data.room)
            .emit('doctorGetMessage', { conversation: data.conversation })
    })

    socket.on('requestOldConversation', (data) => {
        socket.to(data.room).emit('getOldConversation', {
            arrayConversatoin: chatRooms[data.room],
        })
    })

    socket.on('disconnect', () => {
        console.log('before delete user', onlineProviders)
        if (socket.user.role == 'provider')
            delete onlineProviders[socket.user.id]
        else if (socket.user.role == 'doctor')
            delete onlineDoctors[socket.user.id]
        // console.log('Disconnect socket id: ', onlineProviders[socket.userId])
        // console.log('after delete user', onlineProviders)
    })
})

//===== P'Jiang
let users = []
let allMsg = {}
//======== P'First
// const onlineUser = {}

// io.use((socket, next) => {
//     const userId = socket.handshake.auth.id

//     console.log(socket.id)
//     console.log(userId)
//     if (!userId) {
//         console.log(chalk.red('error connect'))
//         return next(new Error('invalid username'))
//     }
//     socket.userId = userId
//     onlineUser[userId] = socket.id
// console.log(chalk.greenBright(`online : ${Object.keys(onlineUser).length}`))
// console.log(chalk.greenBright(`User connected ${socket.id}`))
//     next()
// })
//===== P'Jiang
// io.on('connection', (socket) => {
//     console.log('connect : ', socket.id)
//     socket.on('enter', (data) => {
//         let isNameExist =
//             users.findIndex((el) => el.name === data.username) !== -1
//         // if (isNameExist) return alert('Please choose another name')
//         socket.join(data.room)
//         users.push({ id: socket.id, name: data.username, room: data.room })
//         allMsg[data.room] = allMsg[data.room] ? allMsg[data.room] : []
//         console.log(users)
//         console.log(allMsg)
//         io.to(data.room).emit('getMessage', allMsg[data.room])
//         // console.log('----------------')
//         // console.log(socket.rooms)
//     })

//     socket.on('sendMessage', ({ username, msg, room }) => {
//         // console.log( socket.id,' : ', msg)
//         allMsg[room].push({ id: socket.id, username, msg })
//         console.log(allMsg[room])
//         io.to(room).emit('getMessage', allMsg[room])
//         // socket.to(room).broadcast.emit()
//     })

// socket.on('disconnect', () => {
//     console.log('Disconnect : ', socket.id)
//     let idx = users.findIndex((el) => el.id === socket.id)
//     users.splice(idx, 1)
//     if (users.length === 0) allMsg = {}
//     console.log(users)
// })
// })

const port = process.env.PORT || 8080
server.listen(port, () => console.log('server running on port:' + port))
