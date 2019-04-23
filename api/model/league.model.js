const mongoose = require('mongoose')
const schema = mongoose.Schema

// League Mapping for MongoDB
let leagueSchema = new schema({
    _id: schema.Types.ObjectId,
    name: { type: String, required: true, max: 250 },
    logo: { type: String, required: true, max: 250 },
    start_date: { type: Date, required: true, default: Date.now },
    end_date: { type: Date, required: false },
})

module.exports = mongoose.model('League', leagueSchema)