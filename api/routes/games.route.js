const express = require('express')
const gameController = require('../controller/game.controller')
const router = express.Router()

/* Populate in DB all game for this league */
router.get('/populate/:leagueName', gameController.populateLeague)

module.exports = router