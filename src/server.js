const { Server } = require('socket.io')
const server = require('./app')
const chalk = require('chalk')

const io = new Server(server, {
    cors: {
        origin: '*',
    },
})
//===== P'Jiang
let users = []
let allMsg = {}
//======== P'First
const onlineUser = {}

io.use((socket, next) => {
    const userId = socket.handshake.auth.id

    console.log(socket.id)
    console.log(userId)
    if (!userId) {
        console.log(chalk.red('error connect'))
        return next(new Error('invalid username'))
    }
    socket.userId = userId
    onlineUser[userId] = socket.id
    console.log(chalk.greenBright(`online : ${Object.keys(onlineUser).length}`))
    console.log(chalk.greenBright(`User connected ${socket.id}`))
    next()
})

io.on('connection', (socket) => {
    console.log('connect : ', socket.id)
    socket.on('enter', (data) => {
        let isNameExist =
            users.findIndex((el) => el.name === data.username) !== -1
        if (isNameExist) return alert('Please choose another name')
        socket.join(data.room)
        users.push({ id: socket.id, name: data.username, room: data.room })
        allMsg[data.room] = allMsg[data.room] ? allMsg[data.room] : []
        console.log(users)
        console.log(allMsg)
        io.to(data.room).emit('getMessage', allMsg[data.room])
        // console.log('----------------')
        // console.log(socket.rooms)
    })

    socket.on('sendMessage', ({ username, msg, room }) => {
        // console.log( socket.id,' : ', msg)
        allMsg[room].push({ id: socket.id, username, msg })
        console.log(allMsg[room])
        io.to(room).emit('getMessage', allMsg[room])
    })

    socket.on('disconnect', () => {
        console.log('Disconnect : ', socket.id)
        let idx = users.findIndex((el) => el.id === socket.id)
        users.splice(idx, 1)
        if (users.length === 0) allMsg = {}
        console.log(users)
    })
})

const port = process.env.PORT || 8080
server.listen(port, () => console.log('server running on port:' + port))
