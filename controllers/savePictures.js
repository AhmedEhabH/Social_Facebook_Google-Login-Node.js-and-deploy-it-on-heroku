let https = require('https');
let fs = require('fs');
let cloudinary = require('../configuration/cloudinary').cloudinary;

function uploadImage(url) {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(url, (error, result) => {
            console.log('result');
            console.log(result);
            console.log('error');
            console.log(error);
            resolve({path:result.url});
        });
    })

}

function savePhoto(url, path) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            res.pipe(fs.createWriteStream(path));
            resolve({ path: path.substr(8) });
        });
    });

    // return uploadImage(url);
}

module.exports.uploadedPhoto = () => {
    return "NOT DONE YET";
}

module.exports.facebookPhoto = (url, facebookId) => {
    let date = (new Date()).toISOString();
    let path = `./public/images/users/facebook/${facebookId}-${date}.png`
    // return savePhoto(url, path);
    return uploadImage(url);
}

module.exports.googlePhoto = (url, googleId) => {
    let date = (new Date()).toISOString();
    let path = `./public/images/users/google/${googleId}-${date}.png`
    // return savePhoto(url, path);
    return uploadImage(url);
}