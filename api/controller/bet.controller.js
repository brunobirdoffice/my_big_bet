const Bet = require('../model/bet.model')

exports.createBet = (req, res) => {
    let bet = new Bet({
        user: req.body.user,
        game: req.body.game,
        ratingHomeTeam: Math.round(Math.random() * (50 - 10) + 10),
        ratingAwayTeam: Math.round(Math.random() * (50 - 10) + 10),
        ratingPerfectScore: Math.round(Math.random() * (100 - 50) + 50),
        scoreHommeTeam: req.body.scoreHommeTeam,
        scoreAwayTeam: req.body.scoreAwayTeam,
        scoreBet: req.body.scoreBet
    })
    bet.save((err) => {
        if (err) {
            return res.status(500).send('Bet not created: "' + err.message + '"')
        }
        Bet.find({ _id: bet._id }).populate('user').populate('game').exec((err, bet) => {
            if (err) return handleError(err)
            res.status(201).send(bet)
        })
    })
}

exports.updateBet = (req, res) => {
    const query = { _id: req.params.id }
    Bet.findOneAndUpdate(query, {
        scoreHommeTeam: req.body.scoreHommeTeam,
        scoreAwayTeam: req.body.scoreAwayTeam,
        scoreBet: req.body.scoreBet
    }, { new: true }, (err, bet) => {
        if (err) {
            return res.status(500).send('Bet not update: "' + err.message + '"')
        }
    }).populate('user').populate('game').exec((err, bet) => {
        if (err) return handleError(err)
        res.status(200).send(bet)
    })
}

exports.getBet = (req, res) => {
    Bet.findById(req.params.id, (err, bet) => {
        if (err) {
            return res.status(500).send('Bet not found: "' + err.message + '"')
        }
    }).populate('user').populate('game').exec((err, bet) => {
        if (err) return handleError(err)
        res.status(200).send(bet)
    })
}

exports.getAllBetByUser = (req, res) => {
    Bet.find({ user: req.body.userId }, (err, bets) => {
        if (err) {
            return res.status(500).send('Bets not found: "' + err.message + '"')
        }
    }).populate('user').populate('game').exec((err, bets) => {
        if (err) return handleError(err)
        res.status(200).send(bets)
    })
}