const mongoose = require('mongoose')
const schema = mongoose.Schema

// Game Mapping for MongoDB
let gameSchema = new schema({
    _id: { type: schema.Types.ObjectId, required: true, auto: true, },
    homeTeam: { type: String, required: true, max: 250 },
    awayTeam: { type: String, required: true, max: 250 },
    score_homeTeam: { type: Number, required: true, max: 10 },
    score_awayTeam: { type: Number, required: true, max: 10 },
    league: { type: Schema.Types.ObjectId, ref: 'League' }
})

module.exports = mongoose.model('Game', gameSchema)