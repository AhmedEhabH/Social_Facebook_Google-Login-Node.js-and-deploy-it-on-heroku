const FacebookStrategy = require('passport-facebook').Strategy;
const UserDbController = require('../../controllers/userDbController');
// const config = require('../index');


module.exports = (logger) => new FacebookStrategy(
    {
        clientID: process.env.FACEBOOK_CLIENT_ID, // config.FACEBOOK.clientID
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET, // config.FACEBOOK.clientSecret
        callbackURL: process.env.FACEBOOK_CALLBACK_URL, // config.FACEBOOK.callback_url
        profileFields: ['id', 'displayName', 'photos', 'email'] // config.FACEBOOK.profileFields
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