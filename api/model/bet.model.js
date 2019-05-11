const mongoose = require('mongoose')
const schema = mongoose.Schema

// Bet Mapping for MongoDB
let betSchema = new schema({
    _id: { type: schema.Types.ObjectId, required: true, auto: true, },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    game: { type: Schema.Types.ObjectId, ref: 'Game' },
    ratingHomeTeam: { type: Number, required: true },
    ratingAwayTeam: { type: Number, required: true },
    ratingPerfectScore: { type: Number, required: true },
    scoreHommeTeam: { type: Number, required: true },
    scoreAwayTeam: { type: Number, required: true },
    scoreBet: { type: Number, required: false }
})

module.exports = mongoose.model('Bet', betSchema)