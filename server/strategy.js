
const Auth0Strategy=require('passport-auth0')
const config=require('./config')
const { domain, clientID, clientSecret} = config;

module.exports = new Auth0Strategy ({
    domain: domain,
    clientID: clientID,
    clientSecret: clientSecret,
    callbackURL: 'http://localhost:3000/login',
    scope: 'openid profile email'
}, 
function (accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
})

