const GoogleStrategy = require('passport-google-oauth20').Strategy;
const UserDbController = require('../../controllers/userDbController');
const config = require('../index');

module.exports = (logger) => new GoogleStrategy(
    {
        clientID: config.GOOGLE.clientID,
        clientSecret: config.GOOGLE.clientSecret,
        callbackURL: config.GOOGLE.callback_url
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