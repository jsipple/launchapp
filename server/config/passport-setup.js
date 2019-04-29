const passport = require('passport')
const googleStrategy = require('passport-google-oauth20')
const keys = require('./keys')

passport.use(new googleStrategy({
    // options for google strat
    // probably won't be good as probably will make this /auth first by default
    callbackURL: '/launches/upcoming',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    // passport callback
})
)