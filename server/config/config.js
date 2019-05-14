const providers = ['twitter', 'google', 'facebook', 'github']

const callbacks = providers.map(provider => {
  return process.env.NODE_ENV === 'production'
    ? `https://react-auth-twitter.herokuapp.com/${provider}/callback`
    : `https://localhost:8080/${provider}/callback`
})

const [twitterURL, googleURL, facebookURL] = callbacks

exports.clientOrigin = process.env.NODE_ENV === 'production'
  ? 'https://react-auth-twitter.netlify.com'
  : ['https://127.0.0.1:3000', 'https://localhost:3000']

exports.twitterKeys = {
  consumerKey: process.env.twitterApiKey,
  consumerSecret: process.env.twitterApiSecret,
  callbackURL: twitterURL,
}

exports.googleKeys = {
  clientID: process.env.googleClientID,
  clientSecret: process.env.googleClientSecret,
  profileFields: ['id', 'emails', 'name', 'picture.width(250)'],
  callbackURL: googleURL
}

exports.facebookKeys = {
  clientID: process.env.facebookAppID,
  clientSecret: process.env.facebookClientSecret,
  profileFields: ['id', 'emails', 'name', 'picture.width(250)'],
  callbackURL: facebookURL
}
