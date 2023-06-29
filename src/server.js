const { Server } = require('socket.io')
const server = require('./app')
const chalk = require('chalk')

const io = new Server(server, {
    cors: {
        origin: '*',
    },
})

////========= Chee's Code
const onlineProviders = {}
const onlineDoctors = {}

io.use((socket, next) => {
    const role = socket.handshake.auth.role
    // console.log(socket.handshake.auth)
    if (role == 'doctor') {
        const doctorId = socket.handshake.auth.user.id
        onlineDoctors[doctorId] = socket.id
    } else if (role == 'provider') {
        const providerId = socket.handshake.auth.user.id
        onlineProviders[providerId] = socket.id
    }
    console.log(onlineDoctors)
    console.log(onlineProviders)
    next()
})

io.on('connection', (socket) => {
    socket.on('startChat', (data) => {
        const newRoom = `${data.doctorId}:${data.provderId}`
        socket.join(newRoom)
        socket
            .to(onlineProviders[data.providerId])
            .emit('acceptChat', { newRoom, doctorId: data.doctorId })
    })
    socket.on('providerJoinRoom', (newRoom) => {
        socket.join(newRoom)
    })

    socket.on('doctorSendMessage', (data) => {
        const Room = `${data.doctorId}:${data.provderId}`
        const mess = {
            message: data.message,
            to: 'provider',
            from: 'doctor',
        }
        socket.emit('providerGetMessage', { conversation: mess, room: Room })
    })

    socket.on('providerSendMessage', (data) => {
        const room = `${data.doctorId}:${data.provderId}`

        const mess = {
            message: data.message,
            to: 'doctor',
            from: 'provider',
        }
        socket.to(room).emit('doctorGetMessage', { conversation: mess })
    })
    socket.on('disconnect', () => {})
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

//     socket.on('disconnect', () => {
//         console.log('Disconnect : ', socket.id)
//         let idx = users.findIndex((el) => el.id === socket.id)
//         users.splice(idx, 1)
//         if (users.length === 0) allMsg = {}
//         console.log(users)
//     })
// })

const port = process.env.PORT || 8080
server.listen(port, () => console.log('server running on port:' + port))
