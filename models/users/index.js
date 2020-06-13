const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        lastModified: {
            type: Object,
            default: Date()
        },
        facebookId:{
            type: String
        },
        googleId:{
            type: String
        },
        username:{
            type:String
        },
        email:{
            type:String
        },
        picture:{
            path:{
                type:String,
                default:'/public/images/users/user.svg'
            }
        }
    }
)

module.exports = mongoose.model('User', schema)