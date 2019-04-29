const router = require('express').Router()
const passport = require('passport')

router.get('/google', passport.authenticate('google', {
    // what we want to retrieve see if need more than profile
    scope: ['profile']
}))


module.exports = router
