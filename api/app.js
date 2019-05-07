const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const passport = require('passport')
const jwt = require('jsonwebtoken')
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
passportConfig

// Default route
app.use('/', indexRouter)

// Sufix router for user
app.use('/users', usersRouter)

// Authenticate route
app.post('/login', function (req, res, next) {
    passport.authenticate('local', (err, user, message) => {
        if (err) {
            return next(err)
        }
        if (!user) {
            return res.json(401, message)
        }

        //user has authenticated correctly => create a JWT token 
        var token = jwt.sign({ username: user.userName }, config.jwtKey);
        res.json({ token: token, userId: user._id, userRole: user.userRole, username: user.userName });

    })(req, res, next);
})

module.exports = app
