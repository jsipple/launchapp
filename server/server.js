require('dotenv').config({ debug: process.env.DEBUG })
const express = require('express')
const passportSetup = require('./config/passport-setup')
const apiRoutes = require('./routes/apiRoutes')
const authRoutes = require('./routes/authRoutes')
const app = express();
const socketio = require('socket.io')
const path = require('path');
const mongoose = require('mongoose')

// this encrypts cookies    
// express-session seems to just be a better version of this so not using anymore
// const cookieSession = require('cookie-session')
// probably need the below but need to figure out what i need to do with it first
// const { SESSION_SECRET, CLIENT_ORIGIN } = require('./config')
const session = require('express-session')
const passport = require('passport')
const cors = require('cors')
// might need to add more here
app.use(cors())
const bodyParser = require('body-parser')
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Users";
const https = require('https')
const fs = require('fs')
const PORT = process.env.PORT || 8080;
// figure out how to use this
const certOptions = {
  key: fs.readFileSync(path.resolve('ssl/server.key')),
  cert: fs.readFileSync(path.resolve('ssl/server.crt'))
}
const server = https.createServer(certOptions, app)
app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
)

// app.use(cookieSession({
//     // max age in mili  secconds so that is 1day
//     maxAge: 24 *60 *60 * 1000,
//     // don't store this here
//     // figure out why an array
//     keys: [keys.session.cookieKey]
// }))

app.use(session({ 
  secret: process.env.sessionSecret, 
  resave: true, 
  saveUninitialized: true 
}))

const io = socketio(server)
app.set('io', io)

// make sure to do the json thing too
mongoose.connect(MONGODB_URI, {useNewUrlParser: true}, () => {
    console.log('connected to mongodb')
})
// start passport
// doesn't seem to cause the strategies to be used ask ta's about
app.use(passport.initialize())
app.use(passport.session())

app.use('/', authRoutes)

require("./routes/apiRoutes.js")(app);

// https.createServer(, (req, res) => {

// })
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static('public'))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
    console.log('app listening on port ' + PORT)
})