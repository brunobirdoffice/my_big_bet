const express = require('express')
const userController = require('../controller/user.controller')
const router = express.Router()

/* GET user . */
router.get('/:id', userController.getUser)

/* GET all users . */
router.get('', userController.getAllUsers)

/* Create user . */
router.post('/post', userController.createUser)

/* Put user . */
router.put('/:id', userController.updateUser)

/* Put user . */
router.delete('/:id', userController.deleteUser)

module.exports = router
