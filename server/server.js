const express = require('express')
const passportSetup = require('./config/passport-setup')
const authRoutes = require('./routes/authRoutes')
const app = express()
const mongoose = require('mongoose')
const keys = require('./config/keys')
// this encrypts cookies    
const cookieSession = require('cookie-session')
const passport = require('passport')
const cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser')
const https = require('https')


app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
)

app.use(cookieSession({
    // max age in mili  secconds so that is 1day
    maxAge: 24 *60 *60 * 1000,
    // don't store this here
    // figure out why an array
    keys: [keys.session.cookieKey]
}))

// make sure to do the json thing too
mongoose.connect('mongodb://localhost:27017/launchApp', {useNewUrlParser: true}, () => {
    console.log('connected to mongodb')
})
// start passport
// doesn't seem to cause the strategies to be used ask ta's about
app.use(passport.initialize())
app.use(passport.session())

app.use('/', authRoutes)



// https.createServer(, (req, res) => {

// })

app.listen(8080, () => {
    console.log('app listening on port 8080')
})