const mongoose = require('mongoose')
const schema = mongoose.Schema

// Bet Mapping for MongoDB
let betSchema = new schema({
    _id: schema.Types.ObjectId,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    game: { type: Schema.Types.ObjectId, ref: 'Game' }
})

module.exports = mongoose.model('Bet', betSchema)