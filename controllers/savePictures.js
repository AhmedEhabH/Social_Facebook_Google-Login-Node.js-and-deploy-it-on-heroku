let https = require('https');
let fs = require('fs');

const { Storage } = require('@google-cloud/storage');
const storage = new Storage();


async function uploadFile() {
    const options = {
        version: 'v4',
        action: 'write',
        expires: Date.now() + 15 * 60 * 1000, // 15 minutes
        contentType: 'application/octet-stream',
    };

    // Uploads a local file to the bucket
    const [url] = await storage.bucket(bucketName).upload(filename, {
        // Support for HTTP requests made with `Accept-Encoding: gzip`
        gzip: true,
        // By setting the option `destination`, you can change the name of the
        // object you are uploading to a bucket.
        metadata: {
            // Enable long-lived HTTP caching headers
            // Use only if the contents of the file will never change
            // (If the contents will change, use cacheControl: 'no-cache')
            cacheControl: 'public, max-age=31536000',
        },
    }).getSignedUrl(options);;

    console.log(`${filename} uploaded to ${bucketName}.\nURL:`);
    console.log(url)
    return new Promise((resolve, reject) => {
        resolve(url);
    })
}

function savePhoto(url, path) {
    // return new Promise((resolve, reject) => {
    //     https.get(url, (res) => {
    //         res.pipe(fs.createWriteStream(path));
    //         resolve({ path: path.substr(8) });
    //     });
    // });

    return uploadFile().catch(console.error);
    // [END storage_upload_file]
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