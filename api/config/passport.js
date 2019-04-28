const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../model/user.model')
const config = require('./main')

// Logique d'authentification JWT
module.exports = (passport) => {
    const opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
    opts.secretOrKey = config.jwtKey
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findOne({ id: jwt_payload.userName }, function (err, user) {
            if (err) {
                return done(err, false)
            }
            if (user) {
                done(null, user)
            } else {
                done(null, false)
            }
        })
    }))
}