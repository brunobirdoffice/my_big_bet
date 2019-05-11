const axios = require('axios')
const Game = require('../model/game.model')
const apiKey = require('../config/main').apiKey

const leaguesId = {
    'ldc': 2001,
    'bpl': 2021,
    'ligue1': 2015,
    'bundesliga': 2002,
    'liga': 2014,
    'seriea': 2019
}

exports.populateLeague = async (req, res) => {
    let error = false
    const id = leaguesId[req.params.leagueName]
    const url = `https://api.football-data.org/v2/competitions/${id}/matches`
    const response = await axios.get(url, {
        headers: {
            'X-Auth-Token': apiKey
        }
    })
    response.data.matches.forEach(element => {
        const game = new Game({
            homeTeam: element.homeTeam.name,
            awayTeam: element.awayTeam.name,
            scoreHomeTeam: element.score.fullTime.homeTeam || 0,
            scoreAwayTeam: element.score.fullTime.awayTeam || 0,
            gameDate: element.utcDate,
            league: req.params.leagueName,
            stage: element.stage
        })
        game.save((err) => {
            if (err) {
                console.log(err.message)
                error = true
                //res.end('One or multiple games not saved')
            }
        })
    })
    if (!error) res.status(201).send('games saved')
}

exports.getGamesLeague = (req, res) => {
    Game.find({ league: req.params.leagueName }, {}, { sort: { gameDate: 1 } }, (err, Game) => {
        if (err) {
            return res.status(404).send(err.message)
        }
        res.status(200).send(Game)
    })
}