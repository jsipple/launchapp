const passport = require('passport')
const { Strategy: TwitterStrategy } = require('passport-twitter')
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth')
const { Strategy: FacebookStrategy } = require('passport-facebook')
const User = require('../models/user')
const { twitterKeys, googleKeys, facebookKeys } = require('./config')
console.log(twitterKeys)
// const FontAwesome = require()
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
// this is where also need to save to database
const callback = (accessToken, refreshToken, profile, cb) => cb(null, profile)

// Adding each OAuth provider's strategy to passport
passport.use(new TwitterStrategy(twitterKeys, callback))
passport.use(new GoogleStrategy(googleKeys, callback))
passport.use(new FacebookStrategy(facebookKeys, callback))
// passport.use(new googleStrategy({
//     // options for google strat
//     // probably won't be good as probably will make this /auth first by default
//     callbackURL: '/login/google/callback',
//     clientID: keys.google.clientID,
//     clientSecret: keys.google.clientSecret
// }, (accessToken, refreshToken, profile, done) => {
//     // passport callback
//     // this does not seem to be running whenever authenticated talk to ta's about
//     // probably change to email in case someone uses different auth
//     User.findOrCreate({googleId: profile.id}, (err, user) => {
//         console.log('a')
//         return done(err, user)
//     })


// })
// )


// passport.use(new FacebookStrategy({
//     clientID: keys.facebook.appID,
//     clientSecret: keys.facebook.clientSecret,
//     callbackURL: "http://www.example.com/auth/facebook/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     User.findOrCreate({email: profile.email}, function(err, user) {
//       if (err) { return done(err); }
//       done(null, user);
//     });
//   }
// ));

// passport.use(new TwitterStrategy({
//     consumerKey: keys.twitter.apiKey,
//     consumerSecret: keys.twitter.apiSecret,
//     callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
//   },
//   function(token, tokenSecret, profile, cb) {
//     User.findOrCreate({ twitterId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));