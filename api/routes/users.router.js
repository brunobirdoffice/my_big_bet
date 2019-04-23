const express = require('express')
const userController = require('../controller/user.controller')
const router = express.Router()

/* GET user . */
router.get('/get/:id', userController.getUser)

/* Create user . */
router.post('/post', userController.createUser)

/* Put user . */
router.put('/put/:id', userController.updateUser)

/* Put user . */
router.put('/delete/:id', userController.deleteUser)

module.exports = router
