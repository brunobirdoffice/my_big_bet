const mongoose = require('mongoose')
const schema = mongoose.Schema

// UserStats Mapping for MongoDB
let userStatsSchema = new schema({
    _id: schema.Types.ObjectId,
    league: { type: Schema.Types.ObjectId, ref: 'League' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    point_counter: { type: Number, required: true, max: 10000 },
    perfect_counter: { type: Number, required: true, max: 10000 },
    total_counter: { type: Number, required: true, max: 10000 }
})

module.exports = mongoose.model('UserStats', userStatsSchema)