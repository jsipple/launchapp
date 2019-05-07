const router = require('express').Router()
const passport = require('passport')

router.get('/google', passport.authenticate('google', {
    // what we want to retrieve see if need more than profile
    scope: ['profile']
}))

router.get('/login/google', (req, res) => {
    console.log('login route')
    // res.json({name: 'hello'})
    passport.authenticate('google', {
        scope: ['profile']
    })
    res.send(req.body)
})
router.get('/login/twiter', (req, res) => {
    console.log('twitter')
    // res.json({name: 'hello'})
    passport.authenticate('google', {
        scope: ['profile']
    })
    res.send(req.body)
})

router.get('/google/redirect', passport.authenticate('google', (req, res) => {
    // this is what we want to save to state
    console.log('hello there')
    res.redirect('http://localhost:3000')
    // this is where we redirect too but see what needs to be done with react
}))

router.get('/login/facebook', (req,res) => {
    console.log('facebook')
    // passport.authenticate(''))
})
// not sure what needs to be done with this route
router.get('/auth/twitter/reverse', (req, res) => {

})


module.exports = router
