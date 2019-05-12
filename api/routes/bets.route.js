const express = require('express')
const betController = require('../controller/bet.controller')
const router = express.Router()

/* GET Bet . */
router.get('/:id', betController.getBet)

/* GET all Bets . */
router.get('', betController.getAllBetByUser)

/* Create Bet . */
router.post('/post', betController.createBet)

/* Put Bet . */
router.put('/:id', betController.updateBet)

module.exports = router
