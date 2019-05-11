const mongoose = require('mongoose')
const schema = mongoose.Schema

// League Mapping for MongoDB
let leagueSchema = new schema({
    _id: { type: schema.Types.ObjectId, required: true, auto: true, },
    name: { type: String, required: true, max: 250 },
    gameLeague: { type: String, required: true, max: 250 },
    secretKey: { type: String, required: true, max: 250 },
    startDate: { type: Date, required: true, default: Date.now },
    endDate: { type: Date, required: false },
    gameRemaining: { type: Number, required: true }

})

module.exports = mongoose.model('League', leagueSchema)