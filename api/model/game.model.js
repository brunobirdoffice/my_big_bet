const mongoose = require('mongoose')
const schema = mongoose.Schema

// Game Mapping for MongoDB
let gameSchema = new schema({
    _id: { type: schema.Types.ObjectId, required: true, auto: true, },
    homeTeam: { type: String, required: true, max: 250 },
    awayTeam: { type: String, required: true, max: 250 },
    score_homeTeam: { type: Number, required: true, max: 10 },
    score_awayTeam: { type: Number, required: true, max: 10 },
    gameDate: { type: Date, required: true },
    league: { type: String, required: true, max: 30 }
})

module.exports = mongoose.model('Game', gameSchema)