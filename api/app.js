const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const config = require('./config/main')
const passportConfig = require('./config/passport')
const usersRouter = require('./routes/users.router')
const gameRouter = require('./routes/games.route')
const betRouter = require('./routes/bets.route')

// Connection to Database
config.connectionToDb()

// Create App and Adding Middleware 
const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(passport.initialize());
passportConfig

/* GET home page. */
app.get('/', (req, res) => {
    res.send('<h1>My Big Bet Api v1.0</h1>');
});

// Prefix router for user
app.use('/users', usersRouter)

// Prefix router for game
app.use('/games', gameRouter)

// Prefix router for bet
app.use('/bets', betRouter)

// Authenticate route
app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, message) => {
        if (err) {
            return next(err)
        }
        if (!user) {
            return res.json(401, message)
        }

        //user has authenticated correctly => create a JWT token 
        var token = jwt.sign({ username: user.userName }, config.jwtKey, { expiresIn: '1 day' });
        res.json({ token: token, user: user });

    })(req, res, next);
})

module.exports = app
