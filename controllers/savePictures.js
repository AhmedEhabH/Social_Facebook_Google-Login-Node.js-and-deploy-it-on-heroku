let https = require('https');
let fs = require('fs');
let upload = require('../configuration/cloudinary');

function savePhoto(url, path) {
    // return new Promise((resolve, reject) => {
    //     https.get(url, (res) => {
    //         res.pipe(fs.createWriteStream(path));
    //         resolve({ path: path.substr(8) });
    //     });
    // });

    return upload.uploadImage(url).url;
}

module.exports.uploadedPhoto = () => {
    return "NOT DONE YET";
}

module.exports.facebookPhoto = (url, facebookId) => {
    let date = (new Date()).toISOString();
    let path = `./public/images/users/facebook/${facebookId}-${date}.png`
    return savePhoto(url, path);
}

module.exports.googlePhoto = (url, googleId) => {
    let date = (new Date()).toISOString();
    let path = `./public/images/users/google/${googleId}-${date}.png`
    return savePhoto(url, path);
}