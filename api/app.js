const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const passport = require('passport')
//const jwt = require('jsonwebtoken')
const config = require('./config/main')
const passportConfig = require('./config/passport')
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users.router')

const tokenApiFootBall = '8be74ba2332c4a0992846401a58aaaea'
// Connection to Database
config.connectionToDb()

// Create App and Adding Middleware 
const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(passport.initialize());
passportConfig(passport)

// Default route
app.use('/', indexRouter)
app.use('/login', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        res.send(req.user);
    }
);

// Sufix router for user
app.use('/users', usersRouter)

module.exports = app
