const express = require('express')
const gameController = require('../controller/game.controller')
const router = express.Router()

/* Populate in DB all game for this league */
router.get('/pop/:leagueName', gameController.populateLeague)

/* Get all games for a league */
router.get('/:leagueName', gameController.getGamesLeague)

module.exports = router