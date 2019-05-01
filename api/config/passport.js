const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/user.model')

// Logique d'authentification
exports.passportConfig = passport.use(new LocalStrategy({ usernameField: 'userName', passwordField: 'passWord' }, (username, password, done) => {
    User.findOne({ userName: username }, (err, user) => {
        if (err) {
            return done(err)
        }
        if (!user) {
            return done(null, false, { message: 'Incorrect username or/and password.' })
        }
        if (!user.verifyPassword(password, user)) {
            return done(null, false, { message: 'Incorrect username or/and password.' })
        }
        return done(null, user)
    });
}
));