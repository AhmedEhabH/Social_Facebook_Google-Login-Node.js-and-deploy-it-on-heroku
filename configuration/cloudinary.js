
// const multer = require("multer");
var cloudinary = require('cloudinary').v2;
// const cloudinaryStorage = require("multer-storage-cloudinary");


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

function upload(url){
    cloudinary.uploader.upload(url, (error, result)=>{
        console.log('result');
        console.log(result);
        console.log('error');
        console.log(error);
        return result;
    });
}

module.exports = {
    cloudinary: cloudinary
}
