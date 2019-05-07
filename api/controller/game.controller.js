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
            score_homeTeam: element.score.fullTime.homeTeam,
            score_awayTeam: element.score.fullTime.awayTeam,
            gameDate: element.utcDate,
            league: req.params.leagueName
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