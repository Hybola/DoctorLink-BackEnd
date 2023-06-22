require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan') //จะคอยบอกว่า request ส่งอะไรมาบ้าง
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

const providerRoute = require('./routes/provider-route')
const doctorRoute = require('./routes/doctor-route')
const postRoute = require('./routes/post-route')

const notFoundMiddleware = require('./middlewares/not-found.js')
const errorMiddleware = require('./middlewares/error')
// const authDoctorMiddleware = require("./middlewares/doctor-authenticate");
// const authProviderMiddleware = require('./middlewares/provider-authenticate')

const app = express()
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

app.use('/provider', providerRoute)
app.use('/doctor', doctorRoute)
// app.use("/doctorprofile",authenticate, doctorRoute) // feature doctor
//app.use("/providerprofile", authenticate, providerRoute) //feature provider
app.use('/post', postRoute) //feature post

app.use(notFoundMiddleware)
app.use(errorMiddleware)
////============ เปิดให้ Server run ==========////
const port = process.env.PORT || 8080
app.listen(port, () => console.log('server running on port:' + port))
