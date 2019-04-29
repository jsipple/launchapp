const express = require('express')
const passportSetup = require('./config/passport-setup')
const authRoutes = require('./routes/authRoutes')
const app = express()


app.listen(8080, () => {
    console.log('app listening on port 8080')
})