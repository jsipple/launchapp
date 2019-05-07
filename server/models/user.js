const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
 name: {
  type: String
 },
 email: {
  type: String,
  unique: true,
  required: true,
  trim: true,
  match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 },
 picture: {
  // double check what type this should be
  type: String
 },
 bio: {
  type: String
 },
 // also add a preferred starter page
 // probably better to just have 3rd party id here instead of 3 different ones
 // for pictures see if they just want us to grab from 3rd party or have both options
 googleId: {
  type: String,
  token: String
 },
 facebookId: {
  type: String,
  token: String
 },
 twitterId: {
  type: String,
  token: String
 },
 favLaunches: {
  type: Array
 }
})

userSchema.static.findfbUser = (token, tokenSecret, profile, cb) => {
 let that = this
 return this.findOne({
  'facebookId': profile.id
 })
 .then(
  (err, user) => {
   if (err) throw err
   if (!user) {
    let newUser = new that({
     // double check this is what it should be
     email: profile.emails[0].value,
     name: profile.displayName,
      facebookProvider: {
       id: profile.id,
       token: accessToken
      }
    })
    newUser.save((err, User) => {
     if (err) throw err
     return cb(err, User)
    })
   }
  }
 )
}

const User = mongoose.model('user', userSchema)

module.exports = User