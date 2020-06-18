const GoogleStrategy = require('passport-google-oauth20').Strategy;
const UserDbController = require('../../controllers/userDbController');
const config = require('../index');

module.exports = (logger) => new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID, // config.GOOGLE.clientID
        clientSecret: process.env.GOOGLE_CLIENT_SECRET, // config.GOOGLE.clientSecret
        callbackURL: process.env.GOOGLE_CALLBACK_URL // config.GOOGLE.callback_url
    },
    async (accessToken, refreshToken, profile, done) => {
        logger.info("Google Profile");
        logger.info(profile);
        let user = await UserDbController.findOrCreateGoogleUser(profile, logger);
        logger.info("USER:");
        logger.info(user);
        return done(null, user);
        // return done(null, profile);
    }
)