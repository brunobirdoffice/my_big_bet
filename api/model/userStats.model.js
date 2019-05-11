const mongoose = require('mongoose')
const schema = mongoose.Schema

// UserStats Mapping for MongoDB
let userStatsSchema = new schema({
    _id: { type: schema.Types.ObjectId, required: true, auto: true, },
    league: { type: Schema.Types.ObjectId, ref: 'League' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    pointCounter: { type: Number, required: true, max: 10000 },
    perfectCounter: { type: Number, required: true, max: 10000 },
    totalCounter: { type: Number, required: true, max: 10000 }
})

module.exports = mongoose.model('UserStats', userStatsSchema)