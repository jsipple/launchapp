const passport = require('passport')
const googleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
const User = require('../models/user')

passport.serializeUser((user, done) => {
    // grabs mongodb id
    // null would be the error
    // serailize is used to create cookies
    done(null, user.id)
})
passport.deserializeUser((id, done) => {
    user.findById(id).then((user) => {
        done(null, user)
    })
    // grabs mongodb id
    // null would be the error
})

passport.use(new googleStrategy({
    // options for google strat
    // probably won't be good as probably will make this /auth first by default
    callbackURL: '/login/google/callback',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    // passport callback
    // this does not seem to be running whenever authenticated talk to ta's about
    User.findOrCreate({googleId: profile.id})
        .then((currentUser) => {
            if (currentUser) {
                // user already exist in db
                console.log(currentUser)
                // when done called goes to serialize
                done(null, currentUser)
            } else {
                new User({
                    name: profile.displayName,
                    googleId: profile.id
                }).save().then((newUser) => {
                    console.log(newUser)
                    done(null, newUser)
                })
            }
    })

})
)