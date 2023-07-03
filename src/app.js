require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan') //จะคอยบอกว่า request ส่งอะไรมาบ้าง
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const http = require('http')

const authRoute = require('./routes/auth-route')
const postRoute = require('./routes/post-route')
const followRoute = require('./routes/follow-route')
const profileRoute = require('./routes/profile-route')
const myJobRoute = require('./routes/myjob-route')
const historyRoute = require('./routes/history-routes')

const authenticate = require('./middlewares/authenticate')
const authenticateDoctor = require('./middlewares/doctor-authenticate')
const notFoundMiddleware = require('./middlewares/not-found.js')
const errorMiddleware = require('./middlewares/error')

const app = express()
const server = http.createServer(app)
app.use(cors())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.use(
    rateLimit({
        windowMs: 1 * 60 * 1000, // 15 minutes
        max: 1000, // Limit each IP to 1000 request per `window` (here, per 15 minutes)
        message: { message: 'too many request' },
    })
)
app.use(helmet())
app.use(express.json())

app.use('/auth', authRoute)
app.use('/profile', profileRoute)
app.use('/follow', followRoute)
app.use('/myjob', authenticate, authenticateDoctor, myJobRoute)

app.use('/history', historyRoute)
app.use('/post', postRoute)
////===== Test for feature Chat======
app.use('/test', (req, res) => {
    res.json(req.body)
})
app.get('/', (req, res) => {
    res.send('This is chat Server..')
})

// app.use("/doctorprofile",authenticate, doctorRoute) // feature doctor
//app.use("/providerprofile", authenticate, providerRoute) //feature provider
app.use('/post', postRoute) //feature post

app.use(notFoundMiddleware)
app.use(errorMiddleware)

////============ เปิดให้ Server run ==========////
// const port = process.env.PORT || 8080
// app.listen(port, () => console.log('server running on port:' + port))

module.exports = server
