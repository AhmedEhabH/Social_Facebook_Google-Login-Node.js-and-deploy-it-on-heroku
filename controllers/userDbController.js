const User = require('../models/users/index');
const savePicturesController = require("./savePictures");


async function prepareFacebookUser(profile, logger) {
    logger.info("prepare facebook user");
    // let { path } = await savePicturesController.facebookPhoto(
    //     url = profile._json.picture.data.url,
    //     facebookId = profile.id
    // )
    return new User({
        facebookId:profile.id,
        username: (profile.displayName) ? profile.displayName : "NotFound",
        email: profile._json.email,
        picture: {
            path:profile._json.picture.data.url
        }
    });
}

module.exports.findOrCreateFacebookUser = async (profile, logger) => {
    logger.info("TYPE OF PROFILE");
    logger.info(typeof(profile.id));

    return new Promise(
        async (resolve, reject) => {
            User.findOne(
                {
                    facebookId: profile.id
                }
            ).then(
                async (data) => {
                    logger.info('returned data form find user');
                    logger.info(data);
                    if (!data) {
                        let user = await prepareFacebookUser(profile, logger);
                        logger.info("NEW USER");
                        logger.info(user);
                        resolve(user.save());
                    }
                    logger.info("FOUND");
                    logger.info("_doc");
                    logger.info(data._doc);
                    logger.info("DATA");
                    logger.info(data);
                    resolve(data._doc);
                }   
            ).catch(
                (err) => {
                    reject(err);
                }
            )
        }
    )
};


async function prepareGoogleUser(profile, logger) {
    logger.info("prepare facebook user");
    // let { path } = await savePicturesController.googlePhoto(
    //     url = profile._json.picture,
    //     googleId = profile.id
    // )
    return new User({
        googleId:profile.id,
        username: (profile.displayName) ? profile.displayName : "NotFound",
        email: profile._json.email,
        picture: {
            path:profile._json.picture
        }
    });
}

module.exports.findOrCreateGoogleUser = async (profile, logger) => {
    logger.info("TYPE OF PROFILE");
    logger.info(typeof(profile.id));

    return new Promise(
        async (resolve, reject) => {
            User.findOne(
                {
                    googleId: profile.id
                }
            ).then(
                async (data) => {
                    logger.info('returned data form find user');
                    logger.info(data);
                    if (!data) {
                        let user = await prepareGoogleUser(profile, logger);
                        logger.info("NEW USER");
                        logger.info(user);
                        resolve(user.save());
                    }
                    logger.info("FOUND");
                    logger.info("_doc");
                    logger.info(data._doc);
                    logger.info("DATA");
                    logger.info(data);
                    resolve(data._doc);
                }   
            ).catch(
                (err) => {
                    reject(err);
                }
            )
        }
    )
};

