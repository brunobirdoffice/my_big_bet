const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')

const tokenApiFootBall = '8be74ba2332c4a0992846401a58aaaea'

mongoose.connect('mongodb://127.0.0.1:27017/mbb', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', () => {
    console.log('mongoDB error...')
})

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users.router')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/users', usersRouter)

module.exports = app
