const FacebookStrategy = require('passport-facebook').Strategy;
const UserDbController = require('../../controllers/userDbController');
const config = require('../index');


module.exports = (logger) => new FacebookStrategy(
    {
        clientID: config.FACEBOOK.clientID,
        clientSecret: config.FACEBOOK.clientSecret,
        callbackURL: config.FACEBOOK.callback_url,
        profileFields: config.FACEBOOK.profileFields
    },
    (accessToken, refreshToken, profile, done) => {
        process.nextTick(async () => {
            console.log('FACEBOOK PROFILE');
            console.log(profile);
            // res.locals.currentUser = profile;
            let user = await UserDbController.findOrCreateFacebookUser(profile, logger);
            logger.info("USER:");
            logger.info(user);

            return done(null, user);
        });
    }
)